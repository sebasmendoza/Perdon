var container, stats;
var camera, scene, projector, renderer;

var adding = true;
var theta = 0;
var dz = 0;
var mx = 0;

var mouse = { x: 0, y: 0 }

var group;

var sw = 1000;
var innerSphereRadius = sw * 0.45;

var h = [];

var i = 0, k = 0;
var M = Math;
var R = M.random;
var C = M.cos;
var pi2 = M.PI * 2

function draw(_) {

    var r, g, b;
    if (R() > 0.90) {
        r = 100 + R() * 150;
        b = 50 + R() * 100;
        g = 0;
    } else {
        r = R() * 50;
        b = 100 + R() * 155;
        g = R() * r + b * 0.5;
    }
    var col = r << 16 | g << 8 | b;
    var faces = 6 + ~~(_.R * 0.4);
    var geometry = new THREE.SphereGeometry(_.R, faces, faces);
    var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: col }));

    object.position.x = _.x;
    object.position.y = _.y;
    object.position.z = _.z;

    //object.castShadow = true;
    //object.receiveShadow  = true;

    group.add(object);
}

var ok = false;
var radius = 20;
var attempts = 0;
var xp, yp;
var n;

function create(render) {

    if (render) {
        n.R = radius;
        draw(n);
        h.push(n);
    }

    ok = true;
    radius = 2;
    attempts = 0;

    xp = sw * R() - sw * 0.5;
    yp = sw * R() - sw * 0.5;
    zp = sw * R() - sw * 0.5;
    n = { x: xp, y: yp, z: zp }

}

function test() {

    var dcenter = Math.sqrt(xp * xp + yp * yp + zp * zp);
    var outerbounds = dcenter + radius;
    if (outerbounds > sw * 0.5) {
        create(false);
        return;
    }

    var innerbounds = dcenter - radius;
    if (innerbounds < innerSphereRadius) {
        create(false);
        return;
    }


    while (ok) {
        attempts++;
        i = h.length;
        while (i--) {
            var dx = xp - h[i].x;
            var dy = yp - h[i].y;
            var dz = zp - h[i].z;
            var d = Math.sqrt(dx * dx + dy * dy + dz * dz);
            var md = radius + h[i].R;
            if (md > d || radius > 70) {
                ok = false;
            }
        }
        radius += 1;

        var bounds = dcenter + radius;
        if (bounds > sw * 0.5) {
            ok = false;
        }


    }
    //console.log('test', radius)

    //draw( {x: xp, y: yp, R: radius } );
    radius -= 5;
    create(radius > 20);

};

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    scene = new THREE.Scene();

    group = new THREE.Object3D();
    group.rotation.z = 20;

    scene.add(group);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 0);

    scene.add(camera);

    var light = new THREE.DirectionalLight(0xff9090, 1);
    light.position.set(0, 1, 0).normalize();
    //light.castShadow = true;
    //light.shadowDarkness = 0.5;
    //light.shadowCameraVisible = true;
    scene.add(light);

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, -1).normalize();
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.sortObjects = false;
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    container.appendChild(renderer.domElement);

    radius = innerSphereRadius * 0.7;
    n = { x: 0, y: 0, z: 0, R: 1 }
    h.push(n);
    create(false);

    document.addEventListener('mousedown', function () {
        adding = !adding;
    });
    document.addEventListener('mousemove', onDocumentMouseMove, false);

}

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function add() {
    var j = 0;
    while (j++ < 50) {
        test();
    }
}

function animate() {
    requestAnimationFrame(animate);
    if (adding) add();
    render();
}

function render() {
    mx -= (mx - mouse.x * 0.04) * 0.1;
    theta += mx;
    dz -= 2;
    group.rotation.y = theta;

    var zo = dz;
    if (dz < -1000) zo = -1000;

    var py = Math.cos(dz / 260) * 300;
    var pz = zo + Math.sin(dz / 200) * 400;

    camera.position.set(100, py, pz);

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

init();
animate();