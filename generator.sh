#/bin/sh
set -e

BASE_URL="${BASE_URL:-http://127.0.0.1:3001}"
API_NAME=$1
TARGET="${2:-api/$API_NAME-json}"

echo "FETCHING $BASE_URL/$TARGET"

openapi-generator-cli generate -i $BASE_URL/$TARGET --generator-name typescript-axios -o src/api/$API_NAME --additional-properties=useSingleRequestParameter=true --skip-validate-spec
