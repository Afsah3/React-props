import './App.css';
export default function Hero({profile}) {
    return (
        <section className="hero">
            <h1>{profile.name}</h1>
            <p>{profile.role}</p>
            <p>{profile.city}</p>
            <p>{profile.available ? "Available for hire" : "Not available for hire"}</p>
        </section>
    )
}