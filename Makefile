all: join-script-files modularize-script minify-script

include ../../build/modules.mk

MODULE = history
MODULARIZE_OPTIONS = -jq

SOURCE_SCRIPT_FOLDER = .
SOURCE_SCRIPT_FILES = scripts/uncompressed/history.adapter.jquery.js \
scripts/uncompressed/history.html4.js \
scripts/uncompressed/history.js
