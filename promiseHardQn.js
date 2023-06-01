fetchUserData = (ID) =>{
    return new Promise((resolve,reject)=>{
        if(userId>0){
            const userData={id:userId, name:'sailesh'}
        resolve(userData);
        }
        else{
            reject(error);
        }
    });
}
const id = 123;
Promise.then((userData)=>{
    console.log(userData)
});
Promise.catch((error)=>{
    console.log(error)
});
