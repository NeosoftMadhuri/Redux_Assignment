const initialData={proData: localStorage.getItem("myCart") != undefined ? JSON.parse(localStorage.getItem("myCart")) : [] }

export const addCard=(state=initialData,action)=>{
    switch(action.type)
    {
        case "add":
            if ((localStorage.getItem('myCart') != undefined)) {
                if (state.proData.includes(action.id)) {
                    alert("product already added");
                }
                else {
                    state.proData.push(action.id);
                    localStorage.setItem('myCart', JSON.stringify(state.proData));
                    alert("product added");
                    return { proData: [...state.proData] }
                }
            }
            else {
                state.proData = [];
                state.proData.push(action.id);
                localStorage.setItem('myCart', JSON.stringify(state.proData));
                alert("product added")
                return { proData: [...state.proData] }
            }

        default: return { proData: [...state.proData] }

         
    }
}
    







// {
//   console.log(state);
//       console.log(actions.payload);
//       switch(actions.type){
//         case "new":
//           return{count:[actions.payload]}
//       case "defind":return{count:[...state.count,actions.payload]}
//       default:return state
//       }
  
// }