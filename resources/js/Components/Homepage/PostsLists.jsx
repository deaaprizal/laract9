import { formatTime } from '@/utils/jsHelper';
import { Link } from '@inertiajs/inertia-react';

const noPosts = () => {
  return (
    <div className="text-center">
      <h6 className="font-bold">
        <progress className="progress w-56"></progress>
      </h6>
    </div>
  )
}

const isPosts = (posts) => {
  return posts.map((post, i) => {
    return (
      <div key={i} className="card w-full sm:w-1/2 bg-base-300 shadow-lg">
        <div className="card-body">
          <p className='text-lg'>{post.description}</p>
          <div className="card-actions justify-between text-sm">
            <div className="badge badge-outline">{formatTime(post.updated_at)}</div>
            <Link href={`/author/${post.author}`} as="button" method="get" className="badge badge-inline">{post.author}</Link>
          </div>
        </div>
      </div>
    )
  }
  )
}

export default function PostsList({ posts }) {
  if (!posts || !posts.length) return noPosts()
  return isPosts(posts)
}