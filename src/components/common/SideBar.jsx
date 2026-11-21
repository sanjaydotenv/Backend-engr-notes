import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { curriculumLevels } from "../../app/data/SideBarData.js";
import Tag from "../common/Tag.jsx";

const SideBar = () => {
  const location = useLocation();

  const activeChapter = curriculumLevels
    .flatMap((level) => level.chapters)
    .find((chapter) =>
      chapter.topics.some((topic) => topic.path === location.pathname),
    );

  const [openChapter, setOpenChapter] = useState(
    activeChapter?.id || curriculumLevels[0]?.chapters[0]?.id,
  );

  useEffect(() => {
    if (activeChapter) {
      setOpenChapter(activeChapter.id);
    }
  }, [location.pathname]);

  const toggleChapter = (chapterId) => {
    setOpenChapter((prev) => (prev === chapterId ? null : chapterId));
  };

  return (
    <aside className="sticky top-0 w-72 h-screen shrink-0 flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] border-r border-[var(--border-color)]">
      {/* Sidebar Header */}
      <div className="px-5 py-5 border-b border-[var(--border-color)]">
        <h2 className="text-lg font-semibold">
          Backend{" "}
          <span className="font-semibold tracking-[2px] text-[var(--primary-color)]">
            Engineering
          </span>
        </h2>

        <p className="text-xs text-[var(--text-muted)] mt-1">
          <Tag />
        </p>
      </div>

      {/* Curriculum */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-4">
        {curriculumLevels.map((level) => (
          <div key={level.id} className="mb-7">
            {/* Level Heading */}
            <div className="px-3 mb-3">
              <p className="text-[10px] font-semibold tracking-[2px] text-[var(--primary-color)]">
                LEVEL {level.id.split("-")[1]}
              </p>

              <h3 className="text-sm font-semibold mt-1 text-[var(--text-primary)]">
                {level.title}
              </h3>
            </div>

            {/* Chapters */}
            <div className="flex flex-col gap-1">
              {level.chapters.map((chapter) => {
                const isOpen = openChapter === chapter.id;

                const isActive = chapter.topics.some(
                  (topic) => topic.path === location.pathname,
                );

                return (
                  <div key={chapter.id}>
                    {/* Chapter Button */}
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200
                        ${
                          isActive
                            ? "bg-[var(--primary-soft)] text-[var(--primary-color)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
                        }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-semibold opacity-60">
                          {chapter.number}
                        </span>

                        <span className="text-sm font-medium truncate">
                          {chapter.title}
                        </span>
                      </div>

                      <span className="text-xs shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Topics */}
                    {isOpen && (
                      <div className="ml-5 pl-4 mt-2 mb-3 border-l border-[var(--border-color)] flex flex-col gap-1">
                        {chapter.topics.map((topic, index) => (
                          <NavLink
                            key={index}
                            to={topic.path}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-md text-xs transition-all duration-200
                              ${
                                isActive
                                  ? "bg-[var(--primary-soft)] text-[var(--primary-color)] font-semibold"
                                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                              }`
                            }
                          >
                            {topic.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
