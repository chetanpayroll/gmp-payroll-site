import { courses } from '../../../data/courses';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export default function CourseDetail({ params }) {
    const course = courses.find(c => c.slug === params.slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0A1628] text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                            <span className="text-2xl">{course.icon}</span>
                            <span className="font-bold text-gray-200 uppercase tracking-wide text-xs">{course.level} Level</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                            {course.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-200 font-medium mb-6">
                            {course.subtitle}
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            {course.longDescription}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white mb-1">{course.duration}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Duration</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white mb-1">{course.students}+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Enrolled</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white mb-1">{course.rating}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Rating</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white mb-1">Live</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Format</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href={`/enroll?course=${encodeURIComponent(course.title)}`} className="btn btn-primary px-10 py-4 rounded-xl text-lg hover:scale-105 transition-transform shadow-xl shadow-purple-900/20 inline-flex items-center gap-2">
                            Enroll Now for {course.price === 'Custom' ? 'Corporate Training' : `${course.currency}${course.price}`}
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-20 bg-[#0F172A] border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Column: Syllabus */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span>📚</span> What You'll Learn
                            </h2>
                            <div className="space-y-6">
                                {course.syllabus && course.syllabus.map((module, i) => (
                                    <div key={i} className="bg-[#1E293B]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-colors">
                                        <div className="p-6 bg-white/5 border-b border-white/5">
                                            <h3 className="text-xl font-bold text-white">{module.module}</h3>
                                        </div>
                                        <div className="p-6">
                                            <ul className="space-y-3">
                                                {module.lessons.map((lesson, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-gray-300">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                                        {lesson}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Features & Instructor */}
                        <div className="space-y-8">
                            {/* Course Features */}
                            <div className="bg-[#1E293B]/50 border border-white/5 rounded-3xl p-8 sticky top-24">
                                <h3 className="text-xl font-bold mb-6">This Course Includes:</h3>
                                <ul className="space-y-4 mb-8">
                                    {course.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/enroll?course=${encodeURIComponent(course.title)}`} className="w-full btn btn-primary py-3 rounded-xl flex items-center justify-center gap-2 mb-4">
                                    Secure Your Spot
                                </Link>
                                <p className="text-center text-xs text-gray-500">30-Day Money-Back Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
