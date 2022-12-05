import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from "next/script"
import EmailPage from "../components/EmailPage"

export default function Home() {
	return (
		<>
			<Script src="https://code.jquery.com/jquery-1.10.2.min.js"/>
			<Link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"/>
			<Script src="https://netdna.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"/>
			<EmailPage/>
    </>
	);
}