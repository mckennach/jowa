<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'NB5%S PyIBVvsy/L`a5;Q*b.0L4}htZtH{$G:.n}#ak1:[&&>6]|3Yy~Jn3?~;sL' );
define( 'SECURE_AUTH_KEY',   'RcWDJ5<}pp0o`f;m=0hk@mhLiWHp%L6zJ#UP<~7ijfFh~w$!: i!]xj.=Kpjp4=X' );
define( 'LOGGED_IN_KEY',     'K]&h#@rv4?x=T8P}Cb+!CbU!4C:yx3;X||oh!$uOFAneI<-jrJ9#wh4KIVMgP4>R' );
define( 'NONCE_KEY',         'v$fN[Ri,86$QuUdWEiY=KX:-?l)atNzk+a0LFmNHR)o3^YQ?ri{xVY=^NR,Dz}~*' );
define( 'AUTH_SALT',         'yi!qS{mY)@0+K9[Wvz^vpXG2@B9%WK>(|R=3qA@BkY=uaw~sA)2gfybj(}tUB1~[' );
define( 'SECURE_AUTH_SALT',  'rX9wlJFR+A3`p2|,DXz4m0<hi3F/ !B<qqTYL]sO>Y{.Ch120ctcRkl/#Apg{LBU' );
define( 'LOGGED_IN_SALT',    '^i5[U@z=>-$Nqu>fJ/)+KWIlQ#*2oie|jeIm%x.ytezE<=OSa+c{^7eEP0B0Z{VI' );
define( 'NONCE_SALT',        '12x+&yE.hP/iG@U}D71E@+-XF/0Z>S>9[B^M2>-5RRAYspRUF5l1b5a/,4l`LK/K' );
define( 'WP_CACHE_KEY_SALT', 'XBPjTQOIki>qF:VBe2k$z3raXDB,nG*jf&K2}:[rTi>?ro9!v&R.2W83)LCqY+T$' );
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'Xuxptt$Pt@OzP7jd' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
