<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'PortalPelluhue');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'root');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '9~[]pj}o?r#b,olF 20]`qqc?K]M}Ts54wu#%RkOhKSucbGZ5w*H0hOx+[/g{3mD');
define('SECURE_AUTH_KEY', 'ET*%N.`y*87x,FZe#.og>6{OtL-&Pv$`af/7`2a7Nud5yV&m=!] &{6:c%)/qFdy');
define('LOGGED_IN_KEY', '&Bo7Fc~s|x_h0mQmgQ>-UnOQcw4~8h$C6U$&{iW~s]DtKYCN}of5n,n)}/|08i&P');
define('NONCE_KEY', 'IWK)t4Smu=+([sN5i$vvcwKDo@),/SF&CoPjM.QT6VP[$-{*7:]rTV}Ap=1&9OtR');
define('AUTH_SALT', 'DZF>x,f*ZL.&L<LD$jUBq2qUtQ9heeu614s<dR]O_@S(;~kkc{f&;TD>@ ~Ik1B5');
define('SECURE_AUTH_SALT', ':}^HklcE+,ujj/VFns_F]ls MqfG-::rH(X^rL5=%k08gzJ3%8=%,?93-`/_#k[<');
define('LOGGED_IN_SALT', 'y%i2o]v y(0[R`xKhf$,4([%KB^]RoD]:.ivG8di*yRQ:L.Vi%D7=~%b&Z%?!e-F');
define('NONCE_SALT', '4 j_tC/.{U-O9_/B~T5|`2>[A;9Z;9b)qi5=%Z/#O6vFl~R?~@a O&2p)qG*`|1/');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

