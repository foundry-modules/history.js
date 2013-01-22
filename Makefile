include ../../build/modules.mk

MODULE = history
FILENAME = ${MODULE}.js
SOURCE =  scripts/bundled/html4+html5/jquery.${MODULE}.js
PRODUCTION = ${PRODUCTION_DIR}/${FILENAME}
DEVELOPMENT = ${DEVELOPMENT_DIR}/${FILENAME}

all:
	${MODULARIZE} -n "${MODULE}" ${SOURCE} > ${DEVELOPMENT}
	${UGLIFYJS} ${DEVELOPMENT} > ${PRODUCTION}
