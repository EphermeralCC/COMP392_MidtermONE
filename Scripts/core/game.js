/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    var axes;
    var ambientLight;
    var spotLight;
    var plane;
    var planeGeometry;
    var planeMaterial;
    var cubeFive;
    var cubeFiveGeometry;
    var cubeFiveMaterial;
    var cubeFour;
    var cubeFourGeometry;
    var cubeFourMaterial;
    var cubeThree;
    var cubeThreeGeometry;
    var cubeThreeMaterial;
    var cubeTwo;
    var cubeTwoGeometry;
    var cubeTwoMaterial;
    var cubeOne;
    var cubeOneGeometry;
    var cubeOneMaterial;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        /* ENTER CODE HERE */
        //Add SpotLight to the Scene
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-5.6, 23.1, -5.4);
        spotLight.rotation.set(0.8, 42.7, -19.5);
        scene.add(spotLight);
        console.log("Added SpotLight to the Scene");
        //Add AmbientLight to the Scene
        ambientLight = new AmbientLight(0x404040);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene");
        //Add plane to the Scene
        planeGeometry = new PlaneGeometry(16, 16);
        planeMaterial = new LambertMaterial({ color: 0x040404 });
        plane = new Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * (Math.PI);
        scene.add(plane);
        console.log("Added plane to the Scene...");
        //Add cubeFive to the Scene
        cubeFiveGeometry = new CubeGeometry(2.5, 2.5, 2.5);
        cubeFiveMaterial = new LambertMaterial({ color: 0xFFFFFF });
        cubeFive = new Mesh(cubeFiveGeometry, cubeFiveMaterial);
        cubeFive.position.setY(1.25);
        scene.add(cubeFive);
        console.log("Added cubeFive to the Scene...");
        //Add cubeFour to the Scene
        cubeFourGeometry = new CubeGeometry(2, 2, 2);
        cubeFourMaterial = new LambertMaterial({ color: 0xFFFFFF });
        cubeFour = new Mesh(cubeFourGeometry, cubeFourMaterial);
        cubeFour.position.setY(3.5);
        scene.add(cubeFour);
        console.log("Added cubeFour to the Scene...");
        //Add cubeThree to the Scene
        cubeThreeGeometry = new CubeGeometry(1.5, 1.5, 1.5);
        cubeThreeMaterial = new LambertMaterial({ color: 0xFFFFFF });
        cubeThree = new Mesh(cubeThreeGeometry, cubeThreeMaterial);
        cubeThree.position.setY(5.25);
        scene.add(cubeThree);
        console.log("Added cubeThree to the Scene...");
        //Add cubeTwo to the Scene
        cubeTwoGeometry = new CubeGeometry(1, 1, 1);
        cubeTwoMaterial = new LambertMaterial({ color: 0xFFFFFF });
        cubeTwo = new Mesh(cubeTwoGeometry, cubeTwoMaterial);
        cubeTwo.position.setY(6.5);
        scene.add(cubeTwo);
        console.log("Added cubeTwo to the Scene...");
        //Add cubeOne to the Scene
        cubeOneGeometry = new CubeGeometry(.5, .5, .5);
        cubeOneMaterial = new LambertMaterial({ color: 0xFFFFFF });
        cubeOne = new Mesh(cubeOneGeometry, cubeOneMaterial);
        cubeOne.position.setY(7.25);
        scene.add(cubeOne);
        console.log("Added cubeOne to the Scene...");
        //Add Helper AxisHelper
        axes = new AxisHelper(30);
        plane.add(axes);
        console.log("Added Axis Helper Object to the Plane");
        // add controls
        gui = new GUI();
        control = new Control();
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        /* ENTER CODE for the GUI CONTROL HERE */
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();
//# sourceMappingURL=game.js.map