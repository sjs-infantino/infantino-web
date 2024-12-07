import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { teamMembers } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
    <Section className="overflow-hidden" id="team">
        <div className="container">
            <Heading tag="Meet the Minds Behind the Innovation" title="Our Team: The Driving Force of Infantino's Success!"/>
            <div className="relative grid gap-6 md:grid-cols-3 md:gap-4 md:pb-[7rem]">
                {teamMembers.map((item) => {
                    const status = "Done";
                    return (
                        <div className={`md:flex p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`} key={item.id}>
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
                                </div>
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>
                                    </div>
                                    <div className="mb-10 -my-10 -mx-1 max-md:-mx-0">
                                        <img className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Gradient />
            </div>
        </div>
    </Section>
);

export default Roadmap;
