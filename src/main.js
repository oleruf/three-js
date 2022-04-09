import "./style.css";
import * as THREE from "three";
import Viewer from "./Viewer";

export default class {
  constructor() {
    Viewer.init({
      renderer: {
        parent: document.body,
        antialias: true,
        alpha: false,
        clearColor: "gray",
        pixelRatio: 1,
      },
    });
    this.createObject();
  }
  createObject() {
    this.object = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: "gray" })
    );

    Viewer.scene.add(this.object);
    this.object.position.z = -5;
    var that = this;
    Viewer.addUpdate("rotate_object", () => {
      that.object.rotation.y += 0.01;
    });
  }
}
