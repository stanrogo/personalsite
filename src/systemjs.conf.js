/*
 * This config is only used during development and build phase only
 * It will not be available on production
 */

(function(global) {

    // ENV
    global.ENV = global.ENV || 'development';

    // map tells the System loader where to look for things
    var map = {
        'app': 'src/tmp/app',
	    '@angular': 'node_modules/@angular',
	    'rxjs': 'node_modules/rxjs',
	    'firebase': 'node_modules/firebase',
	    'angularfire2': 'node_modules/angularfire2'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js', main: 'Rx.js'},
	    'firebase': {defaultExtension: 'js', main: 'firebase.js'},
	    'angularfire2': {defaultExtension: 'js', main: 'bundles/angularfire2.umd.js'}
    };

    // Add package entries for angular packages
    var ngPackageNames = [
        // 'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'http',
        'forms'
    ];

	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
	}

	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}

	// Most environments should use UMD; some (Karma) need the individual index files
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

	// Add package entries for angular packages
	ngPackageNames.forEach(setPackageConfig);


    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
