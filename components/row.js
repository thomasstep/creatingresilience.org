export default function Row(props) {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 p-8 min-h-screen w-full items-center md:justiy-between justify-center"
    >
      {props.children}
    </div>
  );
}