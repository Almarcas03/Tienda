const router = require('express').Router();

const controlador = require('../controllers/controladorTienda');

router.get('/', controlador.list);
router.get('/test', controlador.test);
router.post('/add', controlador.save);
router.get('/delete/:id', controlador.delete1);
router.get('/erase/:id', controlador.erase);
router.get('/user', controlador.user);
router.get('/login', controlador.login);
router.get('/admin', controlador.admin);
router.get('/switches', controlador.switches);
router.get('/keyboard', controlador.keyboard);
router.get('/keycaps', controlador.keycaps);
router.get('/cart', controlador.cart);

router.get('/switches1', controlador.switches1);
router.get('/switches2', controlador.switches2);
router.get('/switches3', controlador.switches3);
router.get('/switches4', controlador.switches4);
router.get('/switches5', controlador.switches5);
router.get('/switches6', controlador.switches6);
router.get('/switches7', controlador.switches7);
router.get('/switches8', controlador.switches8);
router.get('/switches9', controlador.switches9);

router.get('/keyboard1', controlador.keyboard1);
router.get('/keyboard2', controlador.keyboard2);
router.get('/keyboard3', controlador.keyboard3);
router.get('/keyboard4', controlador.keyboard4);
router.get('/keyboard5', controlador.keyboard5);
router.get('/keyboard6', controlador.keyboard6);
router.get('/keyboard7', controlador.keyboard7);
router.get('/keyboard8', controlador.keyboard8);
router.get('/keyboard9', controlador.keyboard9);

router.get('/keycap1', controlador.keycap1);
router.get('/keycap2', controlador.keycap2);
router.get('/keycap3', controlador.keycap3);
router.get('/keycap4', controlador.keycap4);
router.get('/keycap5', controlador.keycap5);
router.get('/keycap6', controlador.keycap6);
router.get('/keycap7', controlador.keycap7);
router.get('/keycap8', controlador.keycap8);
router.get('/keycap9', controlador.keycap9);

module.exports = router;

