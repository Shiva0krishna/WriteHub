import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:5000/articles/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching article');
        }
        const data = await response.json();
        setArticle(data.article);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Article</h1>
        <button
          className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600"
          onClick={() => navigate('/post')}
        >
          Post
        </button>
      </header>
      <main className="px-8 py-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{article.title}</h1>
        <p className="text-gray-700 leading-relaxed text-lg">{article.content}</p>
        {article.images && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {article.images.map((image, index) => (
              <img
                key={index}
                src={`http://localhost:5000${image}`}
                alt={`Article ${article.id} Image ${index}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        )}
        <div className="mt-12 flex justify-end">
          <button
            className="px-6 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
};

export default Article;
