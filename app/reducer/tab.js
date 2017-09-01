/**
 * Created by Administrator on 2017/9/1.
 */
const tab = (state, action)=>{
    switch (action.type){
        case "ACCOUNT":
            return {
                selected:true
            }
        case "HOME":
            return {
                selected:true
            }
    }
}
export default tab