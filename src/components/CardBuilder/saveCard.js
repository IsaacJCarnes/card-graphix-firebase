// import React, {useState} from "react";
// import { useMutation } from '@apollo/client';
// import { CREATE_CARD } from '../../utils/mutations'
// import {QUERY_CARDS, GET_ME} from '../../utils/queries'
// import Auth from '../../utils/auth';

// const Card = () => {
//     const[cardId] = useState('') ;

//     const [addCard, {error}] = useMutation(CREATE_CARD, {
//        update (cache, {data: {addCard}}) {
//            try {
//                const { cards } = cache.readyQuery({query: QUERY_CARDS});

//                cache.writeQuery({
//                    query: QUERY_CARDS,
//                    data: {cards: [addCard, ...cards]},
//                });
//            }catch(e) {
//                console.error(e)
//            }

//            const {me} = cache.readQuery({ query: GET_ME});
//            cache.writeQuery({
//                query: GET_ME,
//                data: {me: {...me, cards: [...me.cards, addCard]} },
//            });
//        },
//     })

//  const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try{
//         const{data} = await addCard({ 
//             variables: {
//                 cardId
//             },
//         });
// } catch(err) {
//     console.log(err)
// }
// }
// return(
//     <div>
        
//         {Auth.loggedIn () ? (
//             <>
//             <div onSubmit = {handleFormSubmit}>
//                <button>Add Card</button>
//                </div>
//                </>
//         ): (
//             <p>
//             You need to be logged in to share your thoughts. Please{' '}
//           </p>   
//         )}
//     </div>
// )
// };

// export default Card