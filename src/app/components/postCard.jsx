import Image from 'next/image';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
        //   objectFit="cover"
          className="lazyload cursor-pointer" // Lazyload untuk gambar
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500">{post.date}</p>
        <h2 className="text-sm font-semibold text-gray-900 line-clamp-3">
          {post.title}
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
