# Changelog

All notable changes to this project will be documented in this file.

The format is based on [keep a changelog][xtlink-keep-a-changelog]
and this project adheres to [Semantic Versioning 2.0.0][xtlink-semantic-versioning].

## [0.4.0] - 2023-08-12

### Added

* application page pre-dispatcher

[0.4.0]: https://github.com/codekandis/jotunheim/compare/0.3.1..0.4.0

---
## [0.3.1] - 2023-08-07

### Fixed

* `Object.prototype.hasProperty()`

[0.3.1]: https://github.com/codekandis/jotunheim/compare/0.3.0..0.3.1

---
## [0.3.0] - 2023-08-06

### Fixed

* JSDoc and naming of the abstract URI mappings

[0.3.0]: https://github.com/codekandis/jotunheim/compare/0.2.0..0.3.0

---
## [0.2.0] - 2023-08-05

### Fixed

* implementation of the data binding initialization direction
* argument names and JSDoc of `Array` and all collections
* collections base class invocation
* formats due to code style

### Added

* `Array.prototype.addBy()`, `Array.prototype.joinMapped()`, `Array.prototype.joinBy()`
* `Collection.prototype.addBy()`, `Collection.prototype.joinMapped()`, `Collection.prototype.joinBy()`

[0.2.0]: https://github.com/codekandis/jotunheim/compare/0.1.1..0.2.0

---
## [0.1.1] - 2023-07-31

### Fixed

* return type of `Array.prototype.includesBy()` on empty arrays.
* JSDoc

[0.1.1]: https://github.com/codekandis/jotunheim/compare/0.1.0..0.1.1

---
## [0.1.0] - 2023-07-21

### Added

* descriptive exceptions
* additional JavaScript prototype properties and methods
  * object property and method determination, iteration, binding and merging
  * array iteration, manipulation, filtering, sorting and JSON serialization
  * string template formatting, trimming and HTML special chars replacment
  * generator iteration
  * node list mapping
  * date comparison and JSON deserialization
  * file Base64 (de-)serialization
  * file list iteration and mapping
  * headers iteration and mapping
  * HTML element manipulation
  * HTTP headers iteration and mapping
  * URL determination
* encapsulated events
  * made vanilla JavaScript events available as properties with full vanilla JavaScript compatibility
    * keyboard
    * mouse
    * touch
    * form controls
    * file reader
  * specific event arguments for every event
* data bindings
* abstract base classes
  * static
  * instantiatable
* DOM
  * traversion and manipulation via a DOM helper
* collections
  * iteration, manipulation, filtering, sorting and JSON (de-)serialization
* charset enumeration
* enhanced AJAX capabilites
  * HTTP headers
  * HTTP headers converter
  * HTTP headers collections
  * HTTP request with more manageable options
  * HTTP GET, POST and FILE arguments
  * HTTP response with more manageable states
  * HTTP redirector
  * URI builder
* controls
    * file drop zone control
    * tab control
* `CODE_OF_CONDUCT.md`
* `LICENSE`
* `README.md`
* `CHANGELOG.md`

[0.1.0]: https://github.com/codekandis/jotunheim/tree/0.1.0



[xtlink-keep-a-changelog]: http://keepachangelog.com/en/1.1.0/
[xtlink-semantic-versioning]: http://semver.org/spec/v2.0.0.html
