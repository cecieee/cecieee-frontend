import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
const ActiveLink = ({ children, ...props }) => {
    const router = useRouter()
    const child = React.Children.only(children)
    return (
        <Link {...props}>
        {React.cloneElement(child, { active: router.pathname === props.href })}
        </Link>
    )
    }

    export default ActiveLink;