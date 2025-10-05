// components/NavbarSkeleton.jsx
export default function NavbarSkeleton() {
  return (
    <nav className="p-4 bg-white border-b animate-pulse flex justify-between">
      <div className="h-6 w-24 bg-gray-200 rounded"></div>
      <div className="h-6 w-16 bg-gray-200 rounded"></div>
    </nav>
  );
}
