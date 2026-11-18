
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    serverTimestamp,
    setDoc,
  } from "firebase/firestore";
  
  import { db } from "../firebase/config";
  
  export async function isOrganizationFavorite(
    userId: string,
    organizationId: number
  ): Promise<boolean> {
    const favoriteRef = doc(
      db,
      "users",
      userId,
      "favorites",
      String(organizationId)
    );
  
    const favoriteSnapshot = await getDoc(favoriteRef);
  
    return favoriteSnapshot.exists();
  }
  
  export async function setOrganizationFavorite(
    userId: string,
    organizationId: number,
    favorite: boolean
  ): Promise<void> {
    const favoriteRef = doc(
      db,
      "users",
      userId,
      "favorites",
      String(organizationId)
    );
  
    if (favorite) {
      await setDoc(favoriteRef, {
        organizationId,
        createdAt: serverTimestamp(),
      });
    } else {
      await deleteDoc(favoriteRef);
    }
  }
  
  export async function getFavoriteOrganizationIds(
    userId: string
  ): Promise<number[]> {
    const favoritesRef = collection(
      db,
      "users",
      userId,
      "favorites"
    );
  
    const snapshot = await getDocs(favoritesRef);
  
    return snapshot.docs
      .map((favorite) => Number(favorite.id))
      .filter((id) => Number.isFinite(id));
  }
  