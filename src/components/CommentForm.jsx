import React, { useState } from "react";
import { useStateValue } from './StateProvider';
import { Btn } from './styles/SignIn.style';
import Comments from './Comments'
import { InputText } from "./styles/Comments.style"
import { UserName, UserPhoto } from "./styles/UserNav.style";
import { pushComment } from '../firebase.utilities'


const CommentForm = ({event}) => {

    const [{ isEnglish, currentUser }, dispatch] = useStateValue();

    const [ comment, setComment ] = useState('');

    const hundleSubmit = (e) => {
        e.preventDefault();
        pushComment(event, currentUser, comment);
        return setComment('');
    }

    const hundleChange = (e) => {
        return setComment(e.target.value);
    }

    return (
        <>
            Comments & Reviwes :
            
            { currentUser ?
                <form onSubmit={e => hundleSubmit(e)} css={`width: 80%;`}>
                <InputText placeholder="Write your comments" cols="10" rows="2" value={comment} onChange={e => hundleChange(e)} />
                <Btn google='true' round='true' type='submit'>Submit</Btn>
                </form>
                :
                <InputText placeholder="Please, sign In to write your comment" cols="5" rows="1" disabled />
            }

            <Comments />
        </>
    )

}


export default CommentForm