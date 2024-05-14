import { app } from "./firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export const uploadFile = (setFileUrl, file) => {
  const storage = getStorage(app);
 

  const name = new Date().getTime() + file.name;
  console.log();
  const storageRef = ref(storage, name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      console.log("Upload is " + progress + "% done");

      switch (snapshot.state) {
        case "paused":
          console.log("upload is paused");
          break;

        case "running":
          console.log("upload is running");
          break;
      }
    },(error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        console.log("successfully uploaded");
        setFileUrl(downloadUrl);
      });
    }
  );
};
