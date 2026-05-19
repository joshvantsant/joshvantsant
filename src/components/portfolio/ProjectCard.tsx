import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations.
 * Used in the homepage featured section and portfolio grid.
 *
 * Hover overlay shows:
 *  - Project title
 *  - Category · Year
 *  - Short plain-text description preview
 *  - Skill tags (up to 5, with overflow count)
 *  - Location
 */
export function ProjectCard({
  project,
  aspectRatio,
  showCategory = true,
  index = 0,
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';

  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square',
  };

  // Short plain-text preview — strip markdown, truncate to 110 chars
  const preview = React.useMemo(
    () => stripMarkdown(project.description ?? '').slice(0, 110).trimEnd(),
    [project.description],
  );
  const hasMore = (project.description ?? '').length > 110;

  const visibleSkills = project.skills?.slice(0, 5) ?? [];
  const extraSkills = (project.skills?.length ?? 0) - visibleSkills.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-sm"
      >
        {/* ── Image container ─────────────────────────────────────────────── */}
        <div className={cn('relative overflow-hidden bg-muted', aspectRatioClasses[ratio])}>

          {/* Loading placeholder */}
          {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}

          <motion.img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-110',
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />

          {/* ── Hover overlay ──────────────────────────────────────────────── */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">

              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-light tracking-wide leading-snug">
                {project.title}
              </h3>

              {/* Category · Year */}
              {showCategory && (
                <div className="flex items-center gap-2 text-sm text-white/70 font-light tracking-wide">
                  <span className="capitalize">{project.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
              )}

              {/* Description preview */}
              {preview && (
                <p className="text-xs text-white/65 leading-relaxed line-clamp-2">
                  {preview}{hasMore ? '…' : ''}
                </p>
              )}

              {/* Skill tags */}
              {visibleSkills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {visibleSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium bg-white/15 border border-white/20 text-white/90 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {extraSkills > 0 && (
                    <span className="inline-flex items-center text-[11px] text-white/45 px-1">
                      +{extraSkills} more
                    </span>
                  )}
                </div>
              )}

              {/* Location */}
              {project.location && (
                <p className="flex items-center gap-1 text-[11px] text-white/45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </p>
              )}
            </div>
          </div>

          {/* Subtle hover border */}
          <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Utility ──────────────────────────────────────────────────────────────────

/**
 * Lightweight markdown stripper for plain-text previews.
 * Handles headings, bold, italic, links, code, and list markers.
 */
function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, '')      // fenced code blocks
    .replace(/`[^`]+`/g, '')             // inline code
    .replace(/#{1,6}\s+/g, '')           // headings
    .replace(/\*\*(.+?)\*\*/g, '$1')    // bold
    .replace(/\*(.+?)\*/g, '$1')        // italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // links
    .replace(/^[-*+]\s+/gm, '')          // bullet lists
    .replace(/^\d+\.\s+/gm, '')          // numbered lists
    .replace(/\n{2,}/g, ' ')             // collapse blank lines
    .replace(/\n/g, ' ')                 // collapse single newlines
    .trim();
}
