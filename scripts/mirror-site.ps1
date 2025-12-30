param(
    [Parameter(Mandatory = $true)]
    [string]$Url,

    [string]$OutputDir = "mirror",

    [switch]$IncludeSubdomains,

    [switch]$IgnoreRobots,

    [string]$UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121 Safari/537.36",

    [string]$WgetPath,

    [string]$HttrackPath
)

# Mirror a website locally using GNU wget.exe or HTTrack if available.
# Usage examples:
#   powershell -File .\scripts\mirror-site.ps1 -Url "https://example.com" -OutputDir "mirror"
#   powershell -File .\scripts\mirror-site.ps1 -Url "https://example.com" -IncludeSubdomains

function Write-Info($msg) { Write-Host "[INFO] $msg" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[WARN] $msg" -ForegroundColor Yellow }
function Write-Err($msg)  { Write-Host "[ERR ] $msg" -ForegroundColor Red }

function Test-Cmd($name) {
    try { Get-Command $name -ErrorAction Stop | Out-Null; return $true } catch { return $false }
}

function Get-WgetPath() {
    # Prefer an actual application over the PowerShell alias to Invoke-WebRequest
    $cmd = Get-Command wget -ErrorAction SilentlyContinue
    if ($cmd) {
        if ($cmd.CommandType -eq 'Application') { return $cmd.Source }
        else { Write-Warn "Found 'wget' alias (Invoke-WebRequest). Ignoring alias." }
    }
    if (Test-Cmd 'wget.exe') { return (Get-Command wget.exe).Source }
    return $null
}

function Get-HttrackPath() {
    if (Test-Cmd 'httrack.exe') { return (Get-Command httrack.exe).Source }
    if (Test-Cmd 'httrack') {
        $cmd = Get-Command httrack -ErrorAction SilentlyContinue
        if ($cmd -and $cmd.CommandType -eq 'Application') { return $cmd.Source }
    }
    return $null
}

# Ensure output directory exists
$fullOut = Resolve-Path -LiteralPath (New-Item -ItemType Directory -Force -Path $OutputDir).FullName

$hostDomain = ([System.Uri]$Url).Host

# Prefer GNU wget.exe if present (PowerShell's wget alias is Invoke-WebRequest, we need wget.exe)
$wgetPath = $null
if ($WgetPath -and (Test-Path -LiteralPath $WgetPath)) {
    $wgetPath = (Resolve-Path -LiteralPath $WgetPath).Path
    Write-Info "Using GNU wget at provided path '$wgetPath'"
} else {
    $wgetPath = Get-WgetPath
}
if ($wgetPath) { Write-Info "Using GNU wget at '$wgetPath'" }

$httrackPath = $null
if (-not $wgetPath) {
    if ($HttrackPath -and (Test-Path -LiteralPath $HttrackPath)) {
        $httrackPath = (Resolve-Path -LiteralPath $HttrackPath).Path
        Write-Info "Using HTTrack at provided path '$httrackPath'"
    } else {
        $httrackPath = Get-HttrackPath
    }
    if ($httrackPath) { Write-Info "Using HTTrack at '$httrackPath'" }
}

if ($wgetPath) {
    $args = @(
        "--mirror",                    # enable mirroring
        "--convert-links",             # make links local-friendly
        "--adjust-extension",          # add .html extensions
        "--page-requisites",           # download assets for pages
        "--no-parent",                 # don't ascend to parent dirs
        "--restrict-file-names=windows",
        "--directory-prefix=$fullOut",
        "--user-agent=$UserAgent"
    )

    if ($IncludeSubdomains) {
        $args += "--span-hosts"
        $args += "--domains=$hostDomain"
    }
    if ($IgnoreRobots) {
        $args += "--execute=robots=off"
    }

    Write-Info "Mirroring '$Url' to '$fullOut'"
    & $wgetPath @args $Url
    exit $LASTEXITCODE
}
elseif ($httrackPath) {
    # HTTrack syntax is different; this aims for a similar mirror
    $args = @(
        $Url,
        "-O", $fullOut,      # output dir
        "-%v",               # verbose
        "-F", $UserAgent     # user agent
    )
    if ($IncludeSubdomains) {
        $args += "+*.$hostDomain/*"   # allow subdomains of host
    }
    if ($IgnoreRobots) {
        # HTTrack respects robots by default; -s0 lowers security/robots rules
        $args += "-s0"
    }

    Write-Info "Mirroring '$Url' to '$fullOut' with HTTrack"
    & $httrackPath @args
    exit $LASTEXITCODE
}
else {
    Write-Err "Neither 'wget.exe' nor 'httrack.exe' found in PATH."
    Write-Warn "Install one of these and re-run:"
    Write-Host "  - GNU Wget: https://www.gnu.org/software/wget/ (winget/choco also available)"
    Write-Host "  - HTTrack: https://www.httrack.com/"
    Write-Warn "PowerShell's built-in Invoke-WebRequest cannot do full recursive mirroring."
    exit 1
}
