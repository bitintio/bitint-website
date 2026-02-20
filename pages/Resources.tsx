import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { blogPosts, caseStudies, glossaryTerms } from '../data/content';
import { Button } from '../components/ui/Button';
import { FileText, BookOpen, HelpCircle, ArrowLeft } from 'lucide-react';
import { NotFound } from './GenericPages';

const ResourceCard = ({ title, category, link, type }: any) => (
  <Link to={link} className="block p-6 bg-surface border border-border rounded-lg hover:border-brand transition-colors group h-full">
    <div className="text-xs font-mono text-brand mb-2 uppercase">{category}</div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors">{title}</h3>
    <div className="flex items-center text-sm text-text-secondary">
       {type === 'blog' && <FileText size={16} className="mr-2" />}
       {type === 'case' && <BookOpen size={16} className="mr-2" />}
       <span>Read more &rarr;</span>
    </div>
  </Link>
);

const ResourcesIndex = () => (
  <div className="container-custom py-24">
    <h1 className="text-5xl font-display font-bold mb-8">Resources</h1>
    <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
      <Button href="/resources/blog" variant="secondary">Blog</Button>
      <Button href="/resources/case-studies" variant="secondary">Case Studies</Button>
      <Button href="/resources/glossary" variant="secondary">Glossary</Button>
      <Button href="/resources/fundamentals" variant="secondary">Fundamentals</Button>
      <Button href="/resources/faq" variant="secondary">FAQ</Button>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {blogPosts.slice(0,3).map(post => (
         <ResourceCard key={post.slug} title={post.title} category="Blog" link={`/resources/blog/${post.slug}`} type="blog" />
       ))}
       {caseStudies.slice(0,2).map(cs => (
         <ResourceCard key={cs.slug} title={cs.title} category="Case Study" link={`/resources/case-studies/${cs.slug}`} type="case" />
       ))}
    </div>
  </div>
);

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <NotFound />;
  
  return (
    <div className="container-custom py-24 max-w-3xl">
      <Link to="/resources/blog" className="inline-flex items-center text-sm text-text-secondary hover:text-brand mb-8"><ArrowLeft size={16} className="mr-1"/> Back to Blog</Link>
      <div className="text-brand font-mono mb-4">{post.category} • {post.readTime}</div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">{post.title}</h1>
      <div className="prose dark:prose-invert prose-yellow max-w-none">
        <p className="lead text-xl text-text-secondary">{post.excerpt}</p>
        <hr className="border-border my-8"/>
        {/* Placeholder for content rendering */}
        <p>{post.content}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>The Heuristic Challenge</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
};

const Glossary = () => (
  <div className="container-custom py-24">
     <h1 className="text-4xl font-display font-bold mb-12">Glossary</h1>
     <div className="grid gap-6">
       {glossaryTerms.map(term => (
         <div key={term.slug} className="p-6 bg-surface border border-border rounded-lg">
           <h3 className="text-xl font-bold text-brand mb-2">{term.term}</h3>
           <p className="text-text-secondary">{term.definition}</p>
         </div>
       ))}
     </div>
  </div>
);

export const ResourcesRoutes = () => {
  return (
    <Routes>
      <Route index element={<ResourcesIndex />} />
      <Route path="blog" element={<ResourcesIndex />} /> {/* Simplified for demo: reuse index or build dedicated list */}
      <Route path="blog/:slug" element={<BlogDetail />} />
      <Route path="glossary" element={<Glossary />} />
      <Route path="case-studies" element={<ResourcesIndex />} /> {/* Simplified */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};