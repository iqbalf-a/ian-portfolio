import React from "react";
import loadrunnerIcon from "../assets/icons/loadrunner-logo.png"
import katalonIcon from "../assets/icons/katalon-logo.png"
import springbootIcon from "../assets/icons/spring-boot-logo.png"

const Icon = ({ src, alt, width = 60, height = 60 }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={src} alt={alt} width={width} height={height} className="hover:scale-[1.05] transition-transform duration-200" />
            <p className="text-xs font-mono pt-2 text-gray-400">loremipsum</p>
        </div>
    )
}

export const FigmaIcon = ({ width, height }) => {
    return (
        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width={width} height={height} alt="figma-icon" />
    )
}

export const CodeigniterIcon = ({ width, height }) => {
    return (
        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" width={width} height={height} alt="ci-icon" />
    )
}

export const FlutterIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" width={width} height={height} alt="flutter-icon" />

    )
}

export const SpringIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" width={width} height={height} alt="spring-icon" />

    )
}

export const SpringBootIcon = ({ width, height }) => {
    return (

        <Icon src={springbootIcon} width={width} height={height} alt="spring-boot-icon" />

    )
}

export const LoadRunnerIcon = ({ width, height }) => {
    return (

        <Icon src={loadrunnerIcon} width={width} height={height} alt="loadrunner-icon" />

    )
}

export const KatalonIcon = ({ width, height }) => {
    return (

        <Icon src={katalonIcon} width={width} height={height} alt="katalon-icon" />

    )
}

export const AngularIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width={width} height={height} alt="angular-icon" />

    )
}

export const ReactIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={width} height={height} alt="react-icon" />

    )
}

export const GitIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" width={width} height={height} alt="git-icon" />

    )
}

export const HtmlIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" width={width} height={height} alt="html-icon" />

    )
}

export const CssIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width={width} height={height} alt="css-icon" />

    )
}

export const BootstrapIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width={width} height={height} alt="bootstrap-icon" />

    )
}

export const TailwindCssIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={width} height={height} alt="tailwindcss-icon" />

    )
}

export const DartIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original-wordmark.svg" width={width} height={height} alt="dart-icon" />

    )
}

export const PhpIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width={width} height={height} alt="php-icon" />

    )
}

export const JavaIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" width={width} height={height} alt="java-icon" />

    )
}

export const JavaScriptIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width={width} height={height} alt="js-icon" />

    )
}

export const NodeJsIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width={width} height={height} alt="nodejs-icon" />

    )
}

export const MySqlIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width={width} height={height} alt="mysql-icon" />

    )
}

export const PostgreSqlIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" width={width} height={height} alt="postgres-icon" />

    )
}

export const CSharpIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width={width} height={height} alt="cs-icon" />

    )
}

export const LaravelIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" width={width} height={height} alt="laravel-icon" />

    )
}

export const CppIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={width} height={height} alt="cpp-icon" />

    )
}

export const CIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" width={width} height={height} alt="c-icon" />

    )
}

export const PostmanIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width={width} height={height} alt="postman-icon" />

    )
}

export const UnityIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain-wordmark.svg" width={width} height={height} alt="unity-icon" />

    )
}

export const VercelIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" width={width} height={height} alt="vercel-icon" />

    )
}

export const NuxtIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" width={width} height={height} alt="nuxt-icon" />

    )
}

export const VueIcon = ({ width, height }) => {
    return (

        <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" width={width} height={height} alt="vue-icon" />

    )
}
