WEBPACK=./node_modules/.bin/webpack
WEBPACK_FLAGS=--config webpack.config.js --progress --colors

JEKYLL=bundle exec jekyll

build: FORCE
	$(WEBPACK) $(WEBPACK_FLAGS)

watch: FORCE
	$(WEBPACK) $(WEBPACK_FLAGS) --watch

serve: FORCE
	$(JEKYLL) serve

FORCE:
