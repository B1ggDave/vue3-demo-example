import { ref } from 'vue'
export default ()=>{
    const demo = ref(null)
    return ()=>new Promise((resolve,reject)=>{
        demo.value?.validate().then(()=>resolve()).catch(reject)
    })
}