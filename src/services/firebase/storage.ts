import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import firebase_app from "./config";

const storage = getStorage(firebase_app);

export const productRef = ref(storage, "상품");

export const getDownloadUrl = async (path: string) => {
  return await getDownloadURL(ref(storage, path));
};

export async function getAllUrls(
  path: string,
): Promise<{ [key: string]: string }> {
  const storageRef = ref(storage, path);
  const allFiles = await listAll(storageRef);
  const urls: { [key: string]: string } = {};

  await Promise.all(
    allFiles.items.map(async item => {
      const pathArray = item.fullPath.split("/");
      const fileName = pathArray[pathArray.length - 1];
      const url = await getDownloadURL(item);
      urls[fileName] = url;
    }),
  );

  await Promise.all(
    allFiles.prefixes.map(async prefix => {
      const prefixUrls = await getAllUrls(prefix.fullPath);
      Object.assign(urls, prefixUrls);
    }),
  );
  return urls;
}
