all: join modularize minify

include ../../build/modules.mk

MODULE = history
MODULARIZE_OPTIONS = -jq

SOURCE_DIR = .
SOURCE_FILES = scripts/uncompressed/history.adapter.jquery.js \
scripts/uncompressed/history.html4.js \
scripts/uncompressed/history.js
