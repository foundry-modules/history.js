include ../../build/modules.mk

MODULE = history
FILENAME = ${MODULE}.js
SOURCE = scripts/uncompressed/history.adapter.jquery.js \
scripts/uncompressed/history.html4.js \
scripts/uncompressed/history.js
PRODUCTION = ${PRODUCTION_DIR}/${FILENAME}
DEVELOPMENT = ${DEVELOPMENT_DIR}/${FILENAME}

all:
	cat ${SOURCE} > ${DEVELOPMENT}.tmp
	${MODULARIZE} -jq -n "${MODULE}" ${DEVELOPMENT}.tmp > ${DEVELOPMENT}
	${UGLIFYJS} ${DEVELOPMENT} > ${PRODUCTION}
	rm -fr ${DEVELOPMENT}.tmp
