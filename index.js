var THREE = require('THREE')
window.THREE = THREE
var OrbitControls = require('three-orbit-controls')(THREE)
document.body.style.margin = 0

var scene = new THREE.Scene()
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000)
scene.add(camera)
camera.position.z = 300
var controls = new OrbitControls(camera)

var geometry = new THREE.BoxGeometry(100,100,100)
var material = new THREE.MeshLambertMaterial({color: 0xffffff})
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

var pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.set(10, 50, 130)
scene.add(pointLight);

var ambient = new THREE.AmbientLight( 0x202020 )
scene.add(ambient)

var animate = function() {
	requestAnimationFrame(animate)
	cube.rotation.y += 0.01
	renderer.render(scene, camera)
}
animate()
