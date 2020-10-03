-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2020 at 07:41 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visortek`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipoIdentificacion_id` int(10) NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `tipoIdentificacion_id`, `nombre`, `email`, `direccion`, `telefono`, `numero`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'erick', 'dsd', 'sdsd', 'sdsdsd', 'sdsd', 'sdsdsd', NULL, '2019-05-31 15:32:39', '2019-05-31 15:32:51');

-- --------------------------------------------------------

--
-- Table structure for table `catalogo_colores_productos`
--

CREATE TABLE `catalogo_colores_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `color` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catalogo_colores_productos`
--

INSERT INTO `catalogo_colores_productos` (`id`, `color`, `created_at`, `updated_at`) VALUES
(1, 'Amarillo', '2020-01-28 03:05:46', '2019-05-31 15:40:37'),
(2, 'Azul', '2020-01-28 02:58:27', '0000-00-00 00:00:00'),
(3, 'Transparente', '2020-01-28 02:58:27', '0000-00-00 00:00:00'),
(4, 'Tornasol azul', '2020-01-28 02:58:27', '0000-00-00 00:00:00'),
(5, 'Humo', '2020-01-28 03:13:53', '0000-00-00 00:00:00'),
(6, 'Espejo', '2020-01-28 03:33:00', '0000-00-00 00:00:00'),
(7, 'Tornasol', '2020-06-04 01:29:15', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `catalogo_estilos`
--

CREATE TABLE `catalogo_estilos` (
  `id` int(10) UNSIGNED NOT NULL,
  `forma` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catalogo_estilos`
--

INSERT INTO `catalogo_estilos` (`id`, `forma`, `created_at`, `updated_at`) VALUES
(1, 'largo', NULL, NULL),
(2, 'redondo', NULL, NULL),
(3, 'ee', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `catalogo_tallas`
--

CREATE TABLE `catalogo_tallas` (
  `id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(3) UNSIGNED NOT NULL,
  `talla` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catalogo_tallas`
--

INSERT INTO `catalogo_tallas` (`id`, `producto_id`, `talla`, `created_at`, `updated_at`) VALUES
(1, 0, 'm', '2019-06-22 17:43:05', '0000-00-00 00:00:00'),
(2, 0, 's', '2019-06-22 17:43:10', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `categorias_marcas`
--

CREATE TABLE `categorias_marcas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ciudads`
--

CREATE TABLE `ciudads` (
  `id` int(10) UNSIGNED NOT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `ciudad` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ciudads`
--

INSERT INTO `ciudads` (`id`, `departamento_id`, `ciudad`, `created_at`, `updated_at`) VALUES
(1, 1, 'Santiago de cali', '2019-05-31 16:01:10', '0000-00-00 00:00:00'),
(2, 2, 'Medellin ', '2019-08-02 19:18:20', '0000-00-00 00:00:00'),
(3, 2, 'Itagui', '2019-08-02 19:24:37', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `tipoIdentificacion_id` int(10) UNSIGNED NOT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `tarjeta_id` int(10) UNSIGNED NOT NULL,
  `ciudad_id` int(10) UNSIGNED NOT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellido` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Telefono` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `celular` varchar(13) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`id`, `usuario_id`, `tipoIdentificacion_id`, `departamento_id`, `tarjeta_id`, `ciudad_id`, `avatar`, `nombre`, `apellido`, `Telefono`, `celular`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 0, 0, 0, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588801384/visorteck/avatars/20190616_131213_qak0pv.jpg', 'Erick', 'Romero', NULL, NULL, '2020-05-06 22:14:35', '2019-09-13 18:38:51'),
(2, 2, 0, 0, 0, 0, 'https://res.cloudinary.com/dequvdgav/image/upload/v1567475401/wp2463578-helmets-wallpapers_gy96w3.jpg', NULL, '', NULL, NULL, '2020-01-21 01:54:21', '2019-11-08 02:13:01'),
(3, 3, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-01-16 01:28:02', '2019-11-08 02:16:38'),
(4, 4, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-05-03 01:32:48', '2020-05-03 01:32:48'),
(5, 5, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-05-03 01:35:02', '2020-05-03 01:35:02'),
(6, 3, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-05-03 16:41:38', '2020-05-03 16:41:38'),
(7, 4, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-05-26 00:59:28', '2020-05-26 00:59:28'),
(8, 5, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:10:43', '2020-08-09 02:10:43'),
(9, 6, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:15:20', '2020-08-09 02:15:20'),
(10, 7, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:17:43', '2020-08-09 02:17:43'),
(11, 8, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:20:32', '2020-08-09 02:20:32'),
(12, 9, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:23:13', '2020-08-09 02:23:13'),
(13, 10, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:27:19', '2020-08-09 02:27:19'),
(14, 11, 0, 0, 0, 0, NULL, NULL, '', NULL, NULL, '2020-08-09 02:32:43', '2020-08-09 02:32:43');

-- --------------------------------------------------------

--
-- Table structure for table `comentarios_productos`
--

CREATE TABLE `comentarios_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `descriptionProducto_id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `comentario` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comentarios_productos`
--

INSERT INTO `comentarios_productos` (`id`, `descriptionProducto_id`, `usuario_id`, `comentario`, `estado`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Un casco excepcional le pongo 10', 1, '2019-06-10 01:53:44', '0000-00-00 00:00:00'),
(49, 1, 1, 'Un gran casco estupendo', 1, '2020-07-01 05:12:53', '2020-07-01 05:12:53'),
(83, 6, 1, 'hola4', 1, '2020-07-05 19:01:13', '2020-07-05 19:01:13'),
(84, 6, 1, 'hola6', 1, '2020-07-05 19:01:22', '2020-07-05 19:01:22'),
(95, 6, 1, 'hOLA7', 1, '2020-07-07 02:23:41', '2020-07-07 02:23:41'),
(96, 1, 1, 'Me encanta este casco', 1, '2020-07-07 02:39:56', '2020-07-07 02:39:56'),
(97, 1, 1, 'Lo quiero ya', 1, '2020-07-07 02:47:24', '2020-07-07 02:47:24'),
(102, 1, 1, 'Hola', 1, '2020-07-07 11:42:16', '2020-07-07 11:42:16'),
(103, 1, 1, 'dff', 1, '2020-07-12 20:35:17', '2020-07-12 20:35:17'),
(104, 1, 2, 'hghkj', 1, '2020-08-25 03:14:03', '2020-08-25 03:14:03');

-- --------------------------------------------------------

--
-- Table structure for table `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(10) UNSIGNED NOT NULL,
  `departamento` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departamentos`
--

INSERT INTO `departamentos` (`id`, `departamento`, `created_at`, `updated_at`) VALUES
(1, 'Valle', '2019-05-31 16:06:35', '2019-05-31 16:05:34'),
(2, 'Antioquia', '2019-08-02 16:27:27', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `description_productos`
--

CREATE TABLE `description_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `Producto_id` int(10) UNSIGNED NOT NULL,
  `estado_producto_id` int(10) UNSIGNED NOT NULL,
  `color_id` int(10) UNSIGNED DEFAULT NULL,
  `talla_id` int(10) UNSIGNED DEFAULT NULL,
  `Forma_id` int(10) UNSIGNED DEFAULT NULL,
  `caracteristicas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `Existencia` int(11) NOT NULL,
  `Valor_Venta` int(11) NOT NULL,
  `ValorMin` int(11) NOT NULL,
  `Iva_Porcentaje` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `description_productos`
--

INSERT INTO `description_productos` (`id`, `Producto_id`, `estado_producto_id`, `color_id`, `talla_id`, `Forma_id`, `caracteristicas`, `Existencia`, `Valor_Venta`, `ValorMin`, `Iva_Porcentaje`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 3, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)', 158, 23000, 0, NULL, '2020-05-22 00:19:26', '0000-00-00 00:00:00'),
(2, 2, 1, 3, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 6, 38000, 0, NULL, '2020-05-02 19:39:11', '0000-00-00 00:00:00'),
(3, 2, 1, 5, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 5, 38000, 0, NULL, '2020-05-02 19:38:25', '0000-00-00 00:00:00'),
(4, 3, 3, 4, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 45000, 0, NULL, '2020-05-02 20:04:15', '0000-00-00 00:00:00'),
(5, 4, 3, 3, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 40000, 0, NULL, '2020-05-02 20:04:15', '0000-00-00 00:00:00'),
(6, 5, 1, 3, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 2, 48000, 0, NULL, '2020-05-22 02:14:47', '0000-00-00 00:00:00'),
(7, 5, 1, 5, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 48000, 0, NULL, '2020-06-25 12:25:37', '0000-00-00 00:00:00'),
(8, 6, 3, 3, 1, 0, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 47000, 0, NULL, '2020-05-02 20:11:03', '0000-00-00 00:00:00'),
(9, 6, 3, 4, 1, NULL, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 47000, 0, NULL, '2020-05-02 20:11:03', '0000-00-00 00:00:00'),
(10, 7, 3, 3, 1, NULL, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 45000, 0, NULL, '2020-05-02 20:16:04', '0000-00-00 00:00:00'),
(11, 7, 3, 5, 1, NULL, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 45000, 0, NULL, '2020-05-02 20:16:04', '0000-00-00 00:00:00'),
(12, 1, 3, 5, 1, NULL, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 23000, 0, NULL, '2020-06-04 01:29:53', '0000-00-00 00:00:00'),
(13, 1, 3, 7, 1, NULL, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 23000, 0, NULL, '2020-06-04 01:29:54', '0000-00-00 00:00:00'),
(14, 1, 3, 6, 1, NULL, 'CUMPLE NORMA TÉCNICA (ANTI-SCRATCH)  MATERIAL: POLICARBONATO ', 0, 23000, 0, NULL, '2020-06-04 01:29:54', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `despachos`
--

CREATE TABLE `despachos` (
  `id` int(10) UNSIGNED NOT NULL,
  `envio_id` int(10) UNSIGNED NOT NULL,
  `transportadora_id` int(10) UNSIGNED NOT NULL,
  `fecha_ingreso` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_salida` date NOT NULL,
  `hora_salida` time NOT NULL,
  `fecha_llegada` date NOT NULL,
  `hora_llegada` time NOT NULL,
  `estado_despacho` enum('Despachado','arrivado','destino','recibido','rechazado') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `despachos`
--

INSERT INTO `despachos` (`id`, `envio_id`, `transportadora_id`, `fecha_ingreso`, `fecha_salida`, `hora_salida`, `fecha_llegada`, `hora_llegada`, `estado_despacho`) VALUES
(1, 1, 1, '2019-05-31 19:26:05', '0000-00-00', '00:00:00', '0000-00-00', '00:00:00', 'Despachado');

-- --------------------------------------------------------

--
-- Table structure for table `detalle__ventas`
--

CREATE TABLE `detalle__ventas` (
  `id` int(10) UNSIGNED NOT NULL,
  `venta_id` int(10) UNSIGNED NOT NULL,
  `Producto_id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Valor_Neto` int(11) NOT NULL,
  `Valor_Iva` int(11) DEFAULT NULL,
  `Valor_Pagar` int(11) DEFAULT NULL,
  `N_cuotas` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `detalle__ventas`
--

INSERT INTO `detalle__ventas` (`id`, `venta_id`, `Producto_id`, `nombre`, `Cantidad`, `Valor_Neto`, `Valor_Iva`, `Valor_Pagar`, `N_cuotas`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '', 2, 46000, 0, 46000, NULL, '2020-05-02 23:15:13', NULL),
(2, 2, 7, '', 1, 45000, 0, 45000, NULL, '2020-05-02 22:35:47', NULL),
(3, 3, 1, '', 2, 46000, 0, 46000, NULL, '2020-05-02 22:35:47', NULL),
(4, 4, 7, '', 1, 46000, 0, 46000, NULL, '2020-05-02 23:02:56', NULL),
(5, 5, 7, '', 1, 46000, 0, 46000, NULL, '2020-05-02 23:02:56', NULL),
(6, 6, 7, '', 1, 46000, 0, 46000, NULL, '2020-05-02 23:02:56', NULL),
(7, 9, 1, 'Shaft 581', 2, 23000, NULL, NULL, NULL, '2020-09-03 12:11:14', '2020-09-03 12:11:14'),
(8, 9, 1, 'Shaft 581', 2, 23000, NULL, NULL, NULL, '2020-09-03 12:11:14', '2020-09-03 12:11:14'),
(9, 10, 2, 'Shaft 513', 2, 38000, NULL, NULL, NULL, '2020-09-03 12:16:02', '2020-09-03 12:16:02'),
(10, 11, 1, 'Shaft 581', 2, 23000, NULL, NULL, NULL, '2020-09-03 12:18:53', '2020-09-03 12:18:53'),
(11, 18, 5, 'Shaft 571', 5, 48000, NULL, NULL, NULL, '2020-09-09 02:55:13', '2020-09-09 02:55:13'),
(12, 19, 5, 'Shaft 571', 2, 48000, NULL, NULL, NULL, '2020-09-09 02:57:38', '2020-09-09 02:57:38'),
(13, 20, 5, 'Shaft 571', 2, 48000, NULL, NULL, NULL, '2020-09-09 03:00:16', '2020-09-09 03:00:16'),
(14, 20, 5, 'Shaft 571', 1, 48000, NULL, NULL, NULL, '2020-09-09 03:00:16', '2020-09-09 03:00:16'),
(15, 20, 5, 'Shaft 571', 2, 48000, NULL, NULL, NULL, '2020-09-09 03:00:16', '2020-09-09 03:00:16');

-- --------------------------------------------------------

--
-- Table structure for table `domicilios`
--

CREATE TABLE `domicilios` (
  `id` int(10) UNSIGNED NOT NULL,
  `cliente_id` int(10) UNSIGNED NOT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `ciudad_id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `celular` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datos_adicionales` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `domicilios`
--

INSERT INTO `domicilios` (`id`, `cliente_id`, `departamento_id`, `ciudad_id`, `nombre`, `apellido`, `barrio`, `direccion`, `celular`, `datos_adicionales`, `created_at`, `updated_at`) VALUES
(2, 3, 1, 1, 'Maria de los angeles', 'Rendon Ruiz', 'Montebello', 'Cra 15 n° ', '3214545454', 'Favor tocar el segundo timbre', '2019-11-18 01:32:27', '2019-11-18 01:32:27'),
(3, 1, 1, 1, 'Marvin', 'Romero', 'Floresta', 'Cra 15 n° ', '3128874815', 'Junto a almacen llamado cascos&chelecos el mana', '2019-12-12 00:34:16', '2019-12-12 00:34:16');

-- --------------------------------------------------------

--
-- Table structure for table `envios`
--

CREATE TABLE `envios` (
  `id` int(10) UNSIGNED NOT NULL,
  `Detalle_venta_id` int(10) UNSIGNED NOT NULL,
  `tipo_envio` enum('Domicilio','Recoger_en_tienda') COLLATE utf8mb4_unicode_ci NOT NULL,
  `administrador_id` int(10) UNSIGNED NOT NULL,
  `domicilio_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cedula` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcionProducto` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `envios`
--

INSERT INTO `envios` (`id`, `Detalle_venta_id`, `tipo_envio`, `administrador_id`, `domicilio_id`, `nombre`, `apellido`, `cedula`, `telefono`, `descripcionProducto`, `created_at`, `updated_at`) VALUES
(1, 1, 'Domicilio', 1, '1', 'Ronalds', 'dsd', '323', '2323', 'dsdsd', '2019-05-31 19:24:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `estado_productos`
--

CREATE TABLE `estado_productos` (
  `id` int(3) NOT NULL,
  `estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `estado_productos`
--

INSERT INTO `estado_productos` (`id`, `estado`, `created_at`, `update_at`) VALUES
(1, 'activo', '2020-05-02 18:54:20', '0000-00-00 00:00:00'),
(2, 'inactiva', '2020-05-02 19:47:50', '0000-00-00 00:00:00'),
(3, 'agotado', '2020-05-02 18:54:20', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `facturas`
--

CREATE TABLE `facturas` (
  `id` int(10) UNSIGNED NOT NULL,
  `detalleVenta_id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nit` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `facturas`
--

INSERT INTO `facturas` (`id`, `detalleVenta_id`, `nombre`, `nit`, `created_at`, `updated_at`) VALUES
(1, 1, 'erick', '212121', '2019-05-31 19:37:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `franqicias`
--

CREATE TABLE `franqicias` (
  `id` int(10) UNSIGNED NOT NULL,
  `franqicias` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `franqicias`
--

INSERT INTO `franqicias` (`id`, `franqicias`, `imagen`, `created_at`, `updated_at`) VALUES
(1, 'visa', 'sdsds', '2019-05-31 16:29:42', NULL),
(2, 'Maste', 'sdsd', '2019-05-31 16:29:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruta` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `imagenes`
--

INSERT INTO `imagenes` (`id`, `imagen`, `ruta`, `descripcion`, `created_at`, `updated_at`) VALUES
(1, '1', 'https://res.cloudinary.com/dequvdgav/image/upload/v1567475401/wp2463578-helmets-wallpapers_gy96w3.jpg', 'mejor casco', '2019-09-03 01:51:01', NULL),
(2, '2', 'https://res.cloudinary.com/dequvdgav/image/upload/v1567475400/agv-pistagp-helmet-studio-14_zsewfh.jpg', 'nuevo casco', '2019-09-03 01:51:01', NULL),
(3, '3', 'https://res.cloudinary.com/dequvdgav/image/upload/v1567475401/valentinoAGV_g2fslx.jpg', '', '2019-09-03 01:51:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `marcas`
--

CREATE TABLE `marcas` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipoProducto_id` int(10) UNSIGNED NOT NULL,
  `Marca` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `marcas`
--

INSERT INTO `marcas` (`id`, `tipoProducto_id`, `Marca`, `created_at`, `update_at`) VALUES
(1, 1, 'Shaft', '2020-05-02 18:08:30', '0000-00-00 00:00:00'),
(2, 1, 'Kontrol', '2020-05-02 18:36:16', '0000-00-00 00:00:00'),
(3, 1, 'MT', '2020-05-02 18:08:30', '0000-00-00 00:00:00'),
(4, 1, 'ICH', '2020-05-02 18:36:16', '0000-00-00 00:00:00'),
(5, 1, 'Xecuro', '2020-05-02 18:36:16', '0000-00-00 00:00:00'),
(6, 1, 'Shiro', '2020-05-02 18:36:16', '0000-00-00 00:00:00'),
(7, 1, 'A-Power', '2020-05-02 18:36:16', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `medio_pagos`
--

CREATE TABLE `medio_pagos` (
  `id` int(10) UNSIGNED NOT NULL,
  `medio_pago` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medio_pagos`
--

INSERT INTO `medio_pagos` (`id`, `medio_pago`, `created_at`, `updated_at`) VALUES
(1, 'efectivo', '2019-05-31 16:51:31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mensajes`
--

CREATE TABLE `mensajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Sala_id` bigint(20) UNSIGNED DEFAULT NULL,
  `usuario_id` int(3) UNSIGNED DEFAULT NULL,
  `tipoMensaje_id` bigint(20) UNSIGNED DEFAULT NULL,
  `mensaje` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(700) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mensajes`
--

INSERT INTO `mensajes` (`id`, `Sala_id`, `usuario_id`, `tipoMensaje_id`, `mensaje`, `url`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'Hola amigo He comprado un producto gracias me lo puede enviar a esta direccion', '', NULL, NULL),
(3, 4, 1, NULL, 'Compre un visor shaft 515', NULL, NULL, NULL),
(4, 4, 2, NULL, 'Si señor adonde se lo enviamos', NULL, NULL, NULL),
(5, 4, 1, NULL, 'A la direccion cra 15 nº 32-33', NULL, NULL, NULL),
(6, 4, 2, NULL, 'Con mucho gusto', NULL, NULL, NULL),
(7, 4, 2, NULL, 'Tambien necesito su numero de telefono', NULL, '2020-01-23 00:25:53', '2020-01-23 00:25:53'),
(8, 4, 2, NULL, 'para poderlo llamar ahora mismo', NULL, '2020-01-23 00:37:37', '2020-01-23 00:37:37'),
(9, 4, 2, NULL, 'y poder organizar lo del envio', NULL, '2020-01-23 00:52:15', '2020-01-23 00:52:15'),
(10, 4, 2, NULL, 'de acuerdo ?', NULL, '2020-01-23 00:55:18', '2020-01-23 00:55:18'),
(11, 4, 2, NULL, 'sii?', NULL, '2020-01-23 00:56:52', '2020-01-23 00:56:52'),
(12, 4, 2, NULL, 'xzxzxzxx', NULL, '2020-01-23 00:59:43', '2020-01-23 00:59:43'),
(13, 4, 1, NULL, 'dssd', NULL, '2020-01-23 01:00:04', '2020-01-23 01:00:04'),
(14, 4, 1, NULL, 'Hola desde user', NULL, '2020-01-23 01:02:15', '2020-01-23 01:02:15'),
(15, 4, 2, NULL, 'Hola desde admin', NULL, '2020-01-23 01:02:46', '2020-01-23 01:02:46'),
(16, 4, 2, NULL, 'Hola desde admin otra vez', NULL, '2020-01-23 01:04:53', '2020-01-23 01:04:53'),
(17, 4, 2, NULL, 'Hey', NULL, '2020-01-23 01:05:48', '2020-01-23 01:05:48'),
(18, 4, 2, NULL, 'Hi', NULL, '2020-01-23 01:06:33', '2020-01-23 01:06:33'),
(19, 4, 2, NULL, 'fdfff', NULL, '2020-01-23 01:12:03', '2020-01-23 01:12:03'),
(20, 4, 2, NULL, 'dfdfdfdf', NULL, '2020-01-23 01:15:23', '2020-01-23 01:15:23'),
(21, 4, 1, NULL, 'gfgf', NULL, '2020-01-23 01:16:23', '2020-01-23 01:16:23'),
(22, 4, 1, NULL, 'fffffffff', NULL, '2020-01-23 01:18:01', '2020-01-23 01:18:01'),
(23, 4, 1, NULL, 'maria', NULL, '2020-01-23 01:20:58', '2020-01-23 01:20:58');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(42, '2014_10_12_000000_create_users_table', 1),
(43, '2014_10_12_100000_create_password_resets_table', 1),
(44, '2019_05_16_224556_create_tipo_productos_table', 1),
(45, '2019_05_16_224620_create_catalogo_tallas_table', 1),
(46, '2019_05_16_224625_create_catalogo_colores_productos_table', 1),
(47, '2019_05_16_224631_create_catalogo_estilos_table', 1),
(48, '2019_05_16_224633_create_departamentos_table', 1),
(49, '2019_05_16_224636_create_ciudads_table', 1),
(50, '2019_05_16_224641_create_productos_table', 1),
(51, '2019_05_16_224646_create_description_productos_table', 1),
(52, '2019_05_18_062849_create_facturas_table', 1),
(53, '2019_05_18_062932_create_recibos_table', 1),
(54, '2019_05_29_155424_create_marcas_table', 1),
(55, '2019_05_29_155428_create_tipo_identificacions_table', 1),
(56, '2019_05_29_155432_create_franqicias_table', 1),
(57, '2019_05_29_155437_create_tipo_tarjetas_table', 1),
(58, '2019_05_29_155441_create_medio_pagos_table', 1),
(59, '2019_05_29_155506_create_transportadoras_table', 1),
(60, '2019_05_29_155510_create_admins_table', 1),
(61, '2019_05_29_155523_create_clientes_table', 1),
(62, '2019_05_29_155527_create_tarjeta_infos_table', 1),
(63, '2019_05_29_155531_create_domicilios_table', 1),
(64, '2019_05_29_155535_create_ventas_table', 1),
(65, '2019_05_29_155540_create_detalle__ventas_table', 1),
(66, '2019_05_29_155544_create_envios_table', 1),
(67, '2019_05_29_155548_create_despachos_table', 1),
(68, '2019_05_29_155540_create_detalle_ventas_table', 2),
(69, '2019_05_30_214617_create_categorias_marcas_table', 2),
(70, '2019_06_04_062418_create_imagenes_table', 3),
(71, '2019_06_10_095334_create_comentarios_table', 4),
(72, '2019_06_26_062621_add_usuario_to_users', 5),
(73, '2019_11_13_195750_create_tipo_salas_table', 6),
(74, '2019_11_13_195801_create_tipo_mensajes_table', 6),
(75, '2019_11_13_195805_create_salas_table', 6),
(76, '2019_11_13_195809_create_mensajes_table', 6),
(77, '2019_11_13_195853_create_usuario_salas_table', 6),
(78, '2019_12_19_214028_add_column_venta_id_to_salas_table', 7),
(79, '2019_12_19_223611_drop_column_hora_to_mensajes_table', 8),
(80, '2020_05_02_115751_create_estado_productos_table', 9),
(81, '2020_05_02_131511_add_estado_producto_to_description_product', 10),
(82, '2020_05_05_174531_create_testimoniales_productos_table', 11),
(83, '2020_05_05_192621_rename_testimoniales_producto', 12),
(84, '2020_05_05_194330_create_testimoniales_table', 13),
(85, '2020_05_05_194840_remove_testimonio_to_testimoniales_ventas', 14),
(86, '2020_05_25_191308_add_description_product_to_productos_imagenes', 15),
(87, '2020_06_04_064036_remove_producto_id_to_catalogo_colores_productos', 16),
(93, '2020_07_08_224511_create_preguntas_table', 17),
(94, '2020_07_08_224519_create_respuestas_table', 18),
(95, '2020_07_08_224522_create_pregunta_respuestas_table', 19),
(96, '2020_07_12_112604_drop_pregunta_respuestas_table', 20),
(97, '2020_07_12_113247_create_pregunta_respuestas_table', 21);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('erick@gmail.com', 'Fm7AWt7J4oiH8D1WalLzW4CgQIfHpXF9nT8YCyJj4nzNjqwN3R68XePzuiJQ', '2019-05-31 21:18:38'),
('erickjhorman@gmail.com', 'PDFwWjuypZ9nFf1vgHTbWt9aTjVZk8ChpCYBJfsuBt2UAuG0gBRQpFIxQtnV', '2020-05-05 02:52:40');

-- --------------------------------------------------------

--
-- Table structure for table `preguntas`
--

CREATE TABLE `preguntas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pregunta` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `preguntas`
--

INSERT INTO `preguntas` (`id`, `usuario_id`, `pregunta`, `created_at`, `updated_at`) VALUES
(104, 1, 'Hola buenas nohes esta disponible?', '2020-08-27 01:58:26', '2020-08-27 01:58:26'),
(105, 1, 'Hola buenas noches esta en colo negro?', '2020-08-27 02:09:42', '2020-08-27 02:09:42'),
(106, 1, 'Buenas noches lo envia a Medellín?', '2020-08-27 02:16:43', '2020-08-27 02:16:43');

-- --------------------------------------------------------

--
-- Table structure for table `pregunta_respuesta`
--

CREATE TABLE `pregunta_respuesta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `respuesta_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pregunta_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `pregunta_respuesta`
--

INSERT INTO `pregunta_respuesta` (`id`, `respuesta_id`, `pregunta_id`, `created_at`, `updated_at`) VALUES
(104, 35, 104, '2020-08-27 01:58:26', '2020-08-27 01:59:01'),
(105, 36, 105, '2020-08-27 02:09:42', '2020-08-27 02:10:01'),
(106, 37, 106, '2020-08-27 02:16:43', '2020-09-28 20:20:08');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(10) NOT NULL,
  `marca_id` int(10) UNSIGNED NOT NULL,
  `Producto` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `marca_id`, `Producto`, `imagen`, `Descripcion`, `created_at`, `updated_at`) VALUES
(1, 1, 'Shaft 581', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588434945/visorteck/catalogos/shaft/581/581_shaft-581_a90mle.jpg', 'Un gran caso y una comodidad', '2020-05-02 18:44:03', NULL),
(2, 1, 'Shaft 513', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437524/visorteck/catalogos/shaft/513/513_36_eg2jam.jpg', 'Pequeño peo aerodinamico', '2020-05-02 18:44:03', NULL),
(3, 1, 'Shaft 520', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437525/visorteck/catalogos/shaft/520/iridium/520_iridium_5_jfxoey.jpg', 'Espectacular casco a un buen precio', '2020-05-02 18:46:20', NULL),
(4, 1, 'Shaft 570', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/570/Clear/570_Clear_11_im5pw1.jpg', 'Casco elementar y con grandes amantes ', '2020-05-02 18:46:20', NULL),
(5, 1, 'Shaft 571', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588436097/visorteck/catalogos/shaft/571/571_1_nbikic.jpg', 'El mejor casco para las mujeres mas competirivas', '2020-05-02 18:46:20', NULL),
(6, 1, 'Shaft 589', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/589/Clear/589_Clear_14_bbgx5l.jpg', 'La nueva gama de cascos para tii', '2020-05-02 18:46:20', NULL),
(7, 1, 'Shaft 886', 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450619/visorteck/catalogos/shaft/886/clear/886_clear_24_sxx1y2.jpg', 'Pequeño, buen diseño y un gran desempeño en carreterea', '2020-06-04 01:24:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `producto_imagenes`
--

CREATE TABLE `producto_imagenes` (
  `id_producto_imagenes` int(3) NOT NULL,
  `producto_id` int(3) NOT NULL,
  `description_product_id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `producto_imagenes`
--

INSERT INTO `producto_imagenes` (`id_producto_imagenes`, `producto_id`, `description_product_id`, `imagen`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437524/visorteck/catalogos/shaft/513/513_36_eg2jam.jpg', '2020-05-26 02:56:58', '0000-00-00 00:00:00'),
(2, 2, 2, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437524/visorteck/catalogos/shaft/513/513_37_gmpdbn.jpg', '2020-05-26 00:24:24', '0000-00-00 00:00:00'),
(3, 2, 2, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437524/visorteck/catalogos/shaft/513/513_36_eg2jam.jpg', '2020-05-26 00:24:24', '0000-00-00 00:00:00'),
(4, 2, 3, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437524/visorteck/catalogos/shaft/513/513_32_y5arld.jpg', '2020-05-26 00:24:24', '0000-00-00 00:00:00'),
(5, 2, 3, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437523/visorteck/catalogos/shaft/513/513_33_woqiq4.jpg', '2020-05-26 00:24:24', '0000-00-00 00:00:00'),
(6, 2, 3, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437522/visorteck/catalogos/shaft/513/513_31_sql2ru.jpg', '2020-05-26 00:24:24', '0000-00-00 00:00:00'),
(7, 1, 1, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591270671/visorteck/catalogos/shaft/581/clear/3_oszgtm.jpg', '2020-06-09 02:20:47', '0000-00-00 00:00:00'),
(8, 7, 10, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450619/visorteck/catalogos/shaft/886/clear/886_clear_24_sxx1y2.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(9, 7, 10, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450619/visorteck/catalogos/shaft/886/clear/886_clear_25_t72pec.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(10, 7, 10, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450620/visorteck/catalogos/shaft/886/clear/886_clear_26_zwreoj.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(11, 7, 11, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450620/visorteck/catalogos/shaft/886/smoke/886_smoke_22_q8nhjg.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(12, 7, 11, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450620/visorteck/catalogos/shaft/886/smoke/886_smoke_23_fgzqii.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(13, 7, 11, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450620/visorteck/catalogos/shaft/886/smoke/886_smoke_20_tpdyms.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(14, 7, 11, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588450619/visorteck/catalogos/shaft/886/smoke/886_smoke_21_afwz80.jpg', '2020-06-02 01:20:45', '0000-00-00 00:00:00'),
(15, 2, 2, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437524/visorteck/catalogos/shaft/513/513_38_rmndsf.jpg', '2020-05-26 02:56:58', '0000-00-00 00:00:00'),
(16, 4, 5, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/570/Clear/570_Clear_11_im5pw1.jpg', '2020-06-04 01:19:02', '0000-00-00 00:00:00'),
(17, 4, 5, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/570/Clear/570_Clear_13_odihnz.jpg', '2020-06-04 01:19:02', '0000-00-00 00:00:00'),
(18, 4, 5, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437519/visorteck/catalogos/shaft/570/Clear/570_Clear_12_k1drtc.jpg', '2020-06-04 01:19:02', '0000-00-00 00:00:00'),
(19, 5, 6, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588436097/visorteck/catalogos/shaft/571/571_1_nbikic.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(20, 5, 6, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588436097/visorteck/catalogos/shaft/571/571_3_t4wdhv.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(21, 5, 6, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588436097/visorteck/catalogos/shaft/571/571_2_kxhill.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(22, 6, 8, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/589/Clear/589_Clear_14_bbgx5l.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(23, 6, 8, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/589/Clear/589_Clear_17_id88of.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(24, 6, 8, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/589/Clear/589_Clear_18_tk7uq6.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(25, 6, 9, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437521/visorteck/catalogos/shaft/589/Iridium/589_Iridium_8_apwl50.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(26, 6, 9, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437521/visorteck/catalogos/shaft/589/Iridium/589_Iridium_9_juapvk.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(27, 6, 9, 'https://res.cloudinary.com/dequvdgav/image/upload/v1588437520/visorteck/catalogos/shaft/589/Iridium/589_Iridium_10_ijvhkq.jpg', '2020-06-04 01:23:13', '0000-00-00 00:00:00'),
(28, 1, 12, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234370/visorteck/catalogos/shaft/581/smoke/20191210_112007_burned_uarnrh.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(29, 1, 12, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234368/visorteck/catalogos/shaft/581/smoke/20191210_111920_burned_doqxxx.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(30, 1, 12, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234369/visorteck/catalogos/shaft/581/smoke/20191210_111939_burned_sqv1bt.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(31, 1, 13, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234385/visorteck/catalogos/shaft/581/iridium/20191210_112215_burned_otzbxc.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(32, 1, 13, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234386/visorteck/catalogos/shaft/581/iridium/20191210_112304_burned_1_ywpzml.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(33, 1, 13, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234386/visorteck/catalogos/shaft/581/iridium/20191210_112240_burned_tqomg9.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(34, 1, 14, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234347/visorteck/catalogos/shaft/581/silver/20191210_112844_burned_sfr6ua.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(35, 1, 14, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234347/visorteck/catalogos/shaft/581/silver/20191210_112749_burned_emf6wh.jpg', '2020-06-04 01:36:04', '0000-00-00 00:00:00'),
(36, 1, 14, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591234348/visorteck/catalogos/shaft/581/silver/20191210_112812_burned_yxabgu.jpg', '2020-06-04 01:38:01', '0000-00-00 00:00:00'),
(37, 1, 1, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591270045/visorteck/catalogos/shaft/581/clear/1_j57rci.jpg', '2020-06-09 02:20:47', '0000-00-00 00:00:00'),
(38, 1, 1, 'https://res.cloudinary.com/dequvdgav/image/upload/v1591270044/visorteck/catalogos/shaft/581/clear/2_hwpbht.jpg', '2020-06-09 02:20:47', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `recibos`
--

CREATE TABLE `recibos` (
  `id` int(10) UNSIGNED NOT NULL,
  `detalleVenta_id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recibos`
--

INSERT INTO `recibos` (`id`, `detalleVenta_id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 1, 'erick', '2019-05-31 19:36:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `respuestas`
--

CREATE TABLE `respuestas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario_id` bigint(20) UNSIGNED NOT NULL,
  `respuesta` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `respuestas`
--

INSERT INTO `respuestas` (`id`, `usuario_id`, `respuesta`, `created_at`, `updated_at`) VALUES
(35, 2, 'Si señor color tranparente', '2020-08-27 01:59:01', '2020-08-27 01:59:01'),
(36, 2, 'No señor , esta agotado aun', '2020-08-27 02:10:01', '2020-08-27 02:10:01'),
(37, 2, 'SI la tenemos', '2020-09-28 20:20:08', '2020-09-28 20:20:08');

-- --------------------------------------------------------

--
-- Table structure for table `salas`
--

CREATE TABLE `salas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `venta_id` int(10) UNSIGNED NOT NULL,
  `tipoSala_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `salas`
--

INSERT INTO `salas` (`id`, `venta_id`, `tipoSala_id`, `created_at`, `updated_at`) VALUES
(1, 0, 1, '2019-11-14 03:59:02', '2019-11-14 03:59:02'),
(2, 0, 2, '2019-11-14 03:59:02', '2019-11-14 03:59:02'),
(3, 0, 2, '2019-12-12 01:32:37', '2019-12-12 01:32:37'),
(4, 4, 2, '2019-12-12 01:34:08', '2019-12-12 01:34:08'),
(5, 0, 2, '2019-12-12 01:35:35', '2019-12-12 01:35:35'),
(6, 0, 2, '2019-12-12 01:37:03', '2019-12-12 01:37:03'),
(7, 0, 2, '2019-12-12 01:43:50', '2019-12-12 01:43:50'),
(8, 0, 2, '2019-12-12 01:44:12', '2019-12-12 01:44:12');

-- --------------------------------------------------------

--
-- Table structure for table `tarjeta_infos`
--

CREATE TABLE `tarjeta_infos` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipoIdentificacion_id` int(10) UNSIGNED NOT NULL,
  `numero` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellido` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_expedicion` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cedula` varchar(13) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `testimonios`
--

CREATE TABLE `testimonios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `testimonio` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `testimonios`
--

INSERT INTO `testimonios` (`id`, `testimonio`, `created_at`, `updated_at`) VALUES
(1, 'Espectacular visor y me llego en perfecto estado', '2020-05-06 01:56:30', '0000-00-00 00:00:00'),
(2, 'Este casco Shaft 589 es fenomenal, me encanta y a mis esposa tambien ', '2020-05-06 01:58:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `testimonios_ventas`
--

CREATE TABLE `testimonios_ventas` (
  `id_testimonios_ventas` bigint(20) UNSIGNED NOT NULL,
  `venta_id` int(10) UNSIGNED NOT NULL,
  `testimonio_id` int(10) NOT NULL,
  `tipo_de_mensaje_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `testimonios_ventas`
--

INSERT INTO `testimonios_ventas` (`id_testimonios_ventas`, `venta_id`, `testimonio_id`, `tipo_de_mensaje_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 4, '2020-05-06 01:56:56', '0000-00-00 00:00:00'),
(2, 6, 2, 4, '2020-05-06 01:58:24', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_identificacions`
--

CREATE TABLE `tipo_identificacions` (
  `id` int(10) UNSIGNED NOT NULL,
  `identificacion` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_identificacions`
--

INSERT INTO `tipo_identificacions` (`id`, `identificacion`, `created_at`, `updated_at`) VALUES
(1, 'cedula', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_mensajes`
--

CREATE TABLE `tipo_mensajes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipo_mensaje` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_mensajes`
--

INSERT INTO `tipo_mensajes` (`id`, `tipo_mensaje`, `created_at`, `updated_at`) VALUES
(1, 'video', '2019-11-14 03:59:02', '2019-11-14 03:59:02'),
(2, 'audio', '2019-11-14 03:59:02', '2019-11-14 03:59:02'),
(3, 'documento', '2019-11-14 03:59:02', '2019-11-14 03:59:02'),
(4, 'texto', '2020-05-05 10:40:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_productos`
--

CREATE TABLE `tipo_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `Categoria` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_productos`
--

INSERT INTO `tipo_productos` (`id`, `Categoria`, `created_at`, `updated_at`) VALUES
(1, 'Visores', '2019-05-31 16:11:49', '0000-00-00 00:00:00'),
(2, 'chalecos ', '2019-05-31 16:11:49', '0000-00-00 00:00:00'),
(3, 'Guantes', '2019-06-04 04:01:48', '0000-00-00 00:00:00'),
(4, 'Cascos', '2019-06-04 04:01:48', '0000-00-00 00:00:00'),
(5, 'chaquetas', '2019-06-05 13:37:16', '0000-00-00 00:00:00'),
(6, 'botones', '2019-06-10 04:00:35', '0000-00-00 00:00:00'),
(7, 'Impemeables', '2019-09-02 20:03:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_salas`
--

CREATE TABLE `tipo_salas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_salas`
--

INSERT INTO `tipo_salas` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'publica', '2019-11-14 03:59:02', NULL),
(2, 'privada', '2019-11-14 03:59:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_tarjetas`
--

CREATE TABLE `tipo_tarjetas` (
  `id` int(10) UNSIGNED NOT NULL,
  `tarjeta_id` int(10) UNSIGNED NOT NULL,
  `tarjeta` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_tarjetas`
--

INSERT INTO `tipo_tarjetas` (`id`, `tarjeta_id`, `tarjeta`, `created_at`, `updated_at`) VALUES
(1, 1, 'credito', '2019-05-31 16:30:34', NULL),
(2, 2, 'debito', '2019-05-31 16:30:34', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `transportadoras`
--

CREATE TABLE `transportadoras` (
  `id` int(10) UNSIGNED NOT NULL,
  `transportadora` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor_envio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transportadoras`
--

INSERT INTO `transportadoras` (`id`, `transportadora`, `valor_envio`, `created_at`, `updated_at`) VALUES
(1, 'servientrega', 5000, '2019-05-31 19:25:30', NULL),
(2, 'coordinadora', 5000, '2019-08-01 17:01:58', NULL),
(3, 'interapidisimo', 10000, '2019-08-01 17:02:58', NULL),
(4, 'deprisa', 8000, '2019-08-01 17:13:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user` int(11) NOT NULL DEFAULT 0,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `nombre`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 0, 'erick', 'erick@gmail.com', NULL, '$2y$10$gmqlcOE9D/ENkTXJZlQv.uq.ze9L.TK1dbQo9sYDtrtBB5F2bazV.', NULL, '2019-05-31 01:33:55', '2019-05-31 01:35:13'),
(2, 1, 'admin', 'admin@gmail.com', NULL, '$2y$10$nMt5OeHyQm.0OrmJrRmSCOdovfAO4HOubh38vFwwzHmD9DW48D3Q2', NULL, '2019-11-08 02:13:01', '2019-11-08 02:13:01'),
(3, 0, 'Jhorman', 'erickjhorman@gmail.com', NULL, '$2y$10$.W/Lz7V99LeGcqrqH4rVgeBeH9A/46Us6WO29ScfTa6STVl4C9KSG', NULL, '2020-05-03 16:41:38', '2020-05-05 02:47:11'),
(4, 0, 'Jhohana', 'johana@gmail.com', NULL, '$2y$10$VnqdkxXm8JtrKqh/QVhE.O2nl1qtja3xVDckrL8ba01evvSmRMyqu', NULL, '2020-05-26 00:59:28', '2020-05-26 00:59:28'),
(5, 0, 'Javier', 'javier@gmail.com', NULL, '$2y$10$1v4V80Wd8f1kh26fwbuZsO4MkgPoiTkLvGvU381866BB16l3e.0fS', NULL, '2020-08-09 02:10:43', '2020-08-09 02:10:43'),
(6, 0, 'lucy', 'lucy@gmail.com', NULL, '$2y$10$QFRy1rBeEIPOi2YnwpkLYuOWnXoQqrywWHg05DHQi7HF.ZerxOx8O', NULL, '2020-08-09 02:15:20', '2020-08-09 02:15:20'),
(7, 0, 'jenny', 'jenny@gmail.com', NULL, '$2y$10$voLl/2dovPPUFDu.TZvCbu2HbHG4rc8MY97E471Qc1ZTG5M3ThE32', NULL, '2020-08-09 02:17:43', '2020-08-09 02:17:43'),
(8, 0, 'carlos', 'carlos@gmail.com', NULL, '$2y$10$dyMG4lHIqXKHFaWBbF6YLOFegl7pc6.aW2f15kKPu9VVhpeS5QKT2', NULL, '2020-08-09 02:20:32', '2020-08-09 02:20:32'),
(9, 0, 'jhon', 'jhon@gmail.com', NULL, '$2y$10$U3.6tHbvbx58j4dUqHu5CuNjauPDMRuTnztFcYvX0REOoP0kF7liC', NULL, '2020-08-09 02:23:13', '2020-08-09 02:23:13'),
(10, 0, 'alejandro', 'alejandro@gmail.com', NULL, '$2y$10$xPQuPetGe1TfJG3G8v8ErOKgZXaRl3UpIhpo6.PXpl1uHaMSukmCy', NULL, '2020-08-09 02:27:19', '2020-08-09 02:27:19'),
(11, 0, 'sebas', 'sebas@gmail.com', NULL, '$2y$10$qR/CJqpkBZWIyfj.N/KIIO3Oo5okPJVyN1XnXtS6bQf0HKQh2duLe', NULL, '2020-08-09 02:32:43', '2020-08-09 02:32:43');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_salas`
--

CREATE TABLE `usuario_salas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Sala_id` bigint(20) UNSIGNED DEFAULT NULL,
  `usuario_id` int(3) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuario_salas`
--

INSERT INTO `usuario_salas` (`id`, `Sala_id`, `usuario_id`, `created_at`, `updated_at`) VALUES
(3, 1, 2, '2019-11-08 02:32:38', '2019-11-08 02:32:38'),
(5, 4, 2, '2019-12-12 01:44:12', '2019-12-12 01:44:12'),
(51, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `id` int(10) UNSIGNED NOT NULL,
  `cliente_id` int(10) UNSIGNED NOT NULL,
  `domicilio_id` int(10) UNSIGNED NOT NULL,
  `Valor_Neto` int(11) NOT NULL,
  `Descuento` int(11) DEFAULT NULL,
  `Valor_Iva` int(11) DEFAULT NULL,
  `Valor_a_Pagar` int(11) NOT NULL,
  `Forma_Pago_id` enum('efectivo','Tarjeta debito','Tarjeta credito','Siste credito') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ventas`
--

INSERT INTO `ventas` (`id`, `cliente_id`, `domicilio_id`, `Valor_Neto`, `Descuento`, `Valor_Iva`, `Valor_a_Pagar`, `Forma_Pago_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 46000, NULL, NULL, 46000, 'efectivo', '2020-05-02 20:23:43', NULL),
(2, 1, 1, 45000, NULL, NULL, 45000, 'efectivo', '2020-05-02 20:23:43', NULL),
(3, 1, 1, 46000, NULL, NULL, 46000, 'efectivo', '2020-05-02 20:33:33', NULL),
(4, 1, 1, 46000, NULL, NULL, 46000, 'efectivo', '2020-05-02 22:41:28', NULL),
(5, 1, 1, 46000, NULL, NULL, 46000, 'efectivo', '2020-05-02 22:41:28', NULL),
(6, 1, 1, 46000, NULL, NULL, 46000, 'efectivo', '2020-05-02 22:41:28', NULL),
(7, 1, 1, 920000, NULL, 0, 92000, 'efectivo', '2020-09-03 12:05:46', '2020-09-03 12:05:46'),
(8, 1, 1, 920000, NULL, 0, 92000, 'efectivo', '2020-09-03 12:09:24', '2020-09-03 12:09:24'),
(9, 1, 1, 920000, NULL, 0, 92000, 'efectivo', '2020-09-03 12:11:14', '2020-09-03 12:11:14'),
(10, 1, 1, 760000, NULL, 0, 76000, 'efectivo', '2020-09-03 12:16:02', '2020-09-03 12:16:02'),
(11, 1, 1, 460000, NULL, 0, 46000, 'efectivo', '2020-09-03 12:18:53', '2020-09-03 12:18:53'),
(12, 1, 1, 230000, NULL, 0, 23000, 'efectivo', '2020-09-09 01:49:04', '2020-09-09 01:49:04'),
(13, 1, 1, 230000, NULL, 0, 23000, 'efectivo', '2020-09-09 01:50:34', '2020-09-09 01:50:34'),
(14, 1, 1, 230000, NULL, 0, 23000, '', '2020-09-09 02:40:05', NULL),
(15, 1, 1, 230000, NULL, 0, 23000, '', '2020-09-09 02:42:16', NULL),
(16, 1, 1, 2400000, NULL, 0, 240000, '', '2020-09-09 02:53:15', NULL),
(17, 1, 1, 2400000, NULL, 0, 240000, '', '2020-09-09 02:54:09', NULL),
(18, 1, 1, 2400000, NULL, 0, 240000, '', '2020-09-09 02:55:13', NULL),
(19, 1, 1, 960000, NULL, 0, 96000, '', '2020-09-09 02:57:38', NULL),
(20, 1, 1, 2400000, NULL, 0, 240000, '', '2020-09-09 03:00:16', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_nombre_unique` (`nombre`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `catalogo_colores_productos`
--
ALTER TABLE `catalogo_colores_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `catalogo_estilos`
--
ALTER TABLE `catalogo_estilos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `catalogo_tallas`
--
ALTER TABLE `catalogo_tallas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorias_marcas`
--
ALTER TABLE `categorias_marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ciudads`
--
ALTER TABLE `ciudads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comentarios_productos`
--
ALTER TABLE `comentarios_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `description_productos`
--
ALTER TABLE `description_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `despachos`
--
ALTER TABLE `despachos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detalle__ventas`
--
ALTER TABLE `detalle__ventas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domicilios`
--
ALTER TABLE `domicilios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `envios`
--
ALTER TABLE `envios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estado_productos`
--
ALTER TABLE `estado_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `franqicias`
--
ALTER TABLE `franqicias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medio_pagos`
--
ALTER TABLE `medio_pagos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sala_id_fk_mensaje` (`Sala_id`),
  ADD KEY `tipo_mensaje_fk_mensaje` (`tipoMensaje_id`),
  ADD KEY `usuario_fk_mensaje` (`usuario_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pregunta_respuesta`
--
ALTER TABLE `pregunta_respuesta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producto_imagenes`
--
ALTER TABLE `producto_imagenes`
  ADD PRIMARY KEY (`id_producto_imagenes`);

--
-- Indexes for table `recibos`
--
ALTER TABLE `recibos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo_sala_fk_sala` (`tipoSala_id`);

--
-- Indexes for table `tarjeta_infos`
--
ALTER TABLE `tarjeta_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonios`
--
ALTER TABLE `testimonios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonios_ventas`
--
ALTER TABLE `testimonios_ventas`
  ADD PRIMARY KEY (`id_testimonios_ventas`);

--
-- Indexes for table `tipo_identificacions`
--
ALTER TABLE `tipo_identificacions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_mensajes`
--
ALTER TABLE `tipo_mensajes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_productos`
--
ALTER TABLE `tipo_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_salas`
--
ALTER TABLE `tipo_salas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_tarjetas`
--
ALTER TABLE `tipo_tarjetas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transportadoras`
--
ALTER TABLE `transportadoras`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `usuario_salas`
--
ALTER TABLE `usuario_salas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sala_fk_usuario_sala` (`Sala_id`),
  ADD KEY `user_fk_usuario_sala` (`usuario_id`);

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `catalogo_colores_productos`
--
ALTER TABLE `catalogo_colores_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `catalogo_estilos`
--
ALTER TABLE `catalogo_estilos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `catalogo_tallas`
--
ALTER TABLE `catalogo_tallas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categorias_marcas`
--
ALTER TABLE `categorias_marcas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ciudads`
--
ALTER TABLE `ciudads`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `comentarios_productos`
--
ALTER TABLE `comentarios_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `description_productos`
--
ALTER TABLE `description_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `despachos`
--
ALTER TABLE `despachos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `detalle__ventas`
--
ALTER TABLE `detalle__ventas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `domicilios`
--
ALTER TABLE `domicilios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `envios`
--
ALTER TABLE `envios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `estado_productos`
--
ALTER TABLE `estado_productos`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `franqicias`
--
ALTER TABLE `franqicias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `medio_pagos`
--
ALTER TABLE `medio_pagos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `pregunta_respuesta`
--
ALTER TABLE `pregunta_respuesta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `producto_imagenes`
--
ALTER TABLE `producto_imagenes`
  MODIFY `id_producto_imagenes` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `recibos`
--
ALTER TABLE `recibos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `salas`
--
ALTER TABLE `salas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tarjeta_infos`
--
ALTER TABLE `tarjeta_infos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonios`
--
ALTER TABLE `testimonios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `testimonios_ventas`
--
ALTER TABLE `testimonios_ventas`
  MODIFY `id_testimonios_ventas` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipo_identificacions`
--
ALTER TABLE `tipo_identificacions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tipo_mensajes`
--
ALTER TABLE `tipo_mensajes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tipo_productos`
--
ALTER TABLE `tipo_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tipo_salas`
--
ALTER TABLE `tipo_salas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipo_tarjetas`
--
ALTER TABLE `tipo_tarjetas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transportadoras`
--
ALTER TABLE `transportadoras`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `usuario_salas`
--
ALTER TABLE `usuario_salas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `sala_id_fk_mensaje` FOREIGN KEY (`Sala_id`) REFERENCES `salas` (`id`),
  ADD CONSTRAINT `tipo_mensaje_fk_mensaje` FOREIGN KEY (`tipoMensaje_id`) REFERENCES `tipo_mensajes` (`id`);

--
-- Constraints for table `salas`
--
ALTER TABLE `salas`
  ADD CONSTRAINT `tipo_sala_fk_sala` FOREIGN KEY (`tipoSala_id`) REFERENCES `tipo_salas` (`id`);

--
-- Constraints for table `usuario_salas`
--
ALTER TABLE `usuario_salas`
  ADD CONSTRAINT `sala_fk_usuario_sala` FOREIGN KEY (`Sala_id`) REFERENCES `salas` (`id`),
  ADD CONSTRAINT `user_fk_usuario_sala` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
