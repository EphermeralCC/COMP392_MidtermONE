/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;
    var axes: AxisHelper;
    var ambientLight: AmbientLight;
    var spotLight: SpotLight;

    var plane: Mesh;
    var planeGeometry: PlaneGeometry;
    var planeMaterial: LambertMaterial;

    var cubeFive: Mesh;
    var cubeFiveGeometry: CubeGeometry;
    var cubeFiveMaterial: LambertMaterial;

    var cubeFour: Mesh;
    var cubeFourGeometry: CubeGeometry;
    var cubeFourMaterial: LambertMaterial;

    var cubeThree: Mesh;
    var cubeThreeGeometry: CubeGeometry;
    var cubeThreeMaterial: LambertMaterial;

    var cubeTwo: Mesh;
    var cubeTwoGeometry: CubeGeometry;
    var cubeTwoMaterial: LambertMaterial;

    var cubeOne: Mesh;
    var cubeOneGeometry: CubeGeometry;
    var cubeOneMaterial: LambertMaterial;


    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        
        //Add SpotLight to the Scene
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-4, 6, -4);
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

    function addControl(controlObject: Control): void {
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
    function gameLoop(): void {
        stats.update();
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
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
    }

})();

