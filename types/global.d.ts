// modules
declare module '*.css';
declare module '*.html' {
  const content: string;
  export default content;
}
