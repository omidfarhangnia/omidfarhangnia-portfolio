function HeroSection({ content }: { content: any }) {
  return (
    <section>
      <div>
        <h1>{content.header}</h1>
        <p>{content.description}</p>
      </div>
    </section>
  );
}

export default HeroSection;
