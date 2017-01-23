# [JSPM Linking Issue](https://github.com/jspm/jspm-cli/issues/2216#issuecomment-274430799)

Attempting to link a package 'higher' then you, causes a recursive loop.

## Reproduce
git clone https://github.com/alexisvincent/tests
cd tests/jspm/linking/test
jspm link ..