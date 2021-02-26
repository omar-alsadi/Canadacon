import React from "react";
import { useStateValue } from './StateProvider';
import { Btn } from './styles/SignIn.style';
import { CommentsWrapper, InputText, User, UserComment, Comment, CommentDetails, CommentDate } from "./styles/Comments.style"
import { UserName, UserPhoto } from "./styles/UserNav.style";


const Comments = ({ event }) => {

    const [{ isEnglish, currentUser }, dispatch] = useStateValue()

    return (
        <>

            <CommentsWrapper>
                <UserComment>
                    <User>
                        <UserPhoto />
                        <CommentDetails>
                            <UserName css={`font-weight: bold;`}>User</UserName>
                            <CommentDate>21/01/2021</CommentDate>
                        </CommentDetails>
                    </User>
                    <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae tenetur pariatur sint aspernatur reiciendis eligendi recusandae odit qui a id voluptate explicabo dolor,
                        nulla vitae quo inventore eveniet debitis dicta.</Comment>
                </UserComment>

            </CommentsWrapper>

        </>
    )

}


export default Comments