param(
    [string]$SourceDir = "mirror",
    [string]$EleventyDir = "site",
    [switch]$Clean
)

function Write-Info($msg) { Write-Host "[INFO] $msg" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[WARN] $msg" -ForegroundColor Yellow }
function Write-Err($msg)  { Write-Host "[ERR ] $msg" -ForegroundColor Red }

$src = Resolve-Path -LiteralPath $SourceDir -ErrorAction SilentlyContinue
if (-not $src) { Write-Err "Source directory '$SourceDir' not found."; exit 1 }
$site = Join-Path -Path (Resolve-Path -LiteralPath $EleventyDir).Path -ChildPath "src"
New-Item -ItemType Directory -Force -Path $site | Out-Null

if ($Clean) {
    Write-Warn "Cleaning target '$site'"
    Get-ChildItem -Path $site -Force | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
}

Write-Info "Copying mirrored content from '$src' to '$site'"
Copy-Item -Path (Join-Path $src "*") -Destination $site -Recurse -Force

Write-Info "Done. You can now run Eleventy in '$EleventyDir'"
