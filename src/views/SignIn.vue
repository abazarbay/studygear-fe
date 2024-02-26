<template>
    <h1> Sign in </h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    <button id="signOut" v-if="isLoggedIn" @click="handleSignOut">Sign Out</button>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();
const isLoggedIn = ref(false);

// Firebase auth instance
const auth = getAuth();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
        if (isLoggedIn.value) {
            router.push('/cart'); 
        }
    });
});

const register = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log("Successfully signed in!");
        router.push('/cart');
    } catch (error) {
        console.error(error.code);
        errMsg.value = "Email or password was incorrect.";
    }
};

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        console.log("Successfully signed in with Google");
        router.push('/cart');
    } catch (error) {
        console.error(error.code, error.message);
        errMsg.value = "An error occurred with Google sign in.";
    }
};

const handleSignOut = async () => {
    try {
        await signOut(auth);
        router.push("/");
    } catch (error) {
        console.error("Sign out failed", error);
    }
};
</script>

<style scoped>
h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
}
</style>