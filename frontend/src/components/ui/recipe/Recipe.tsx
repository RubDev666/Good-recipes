import { Link } from "react-router";
import {
  RecipeContainer,
  RecipeTop,
  RecipeMain,
  RecipeSidebar,
  RecipeFooter as RecipeFooterComponent,
} from "../../../components/ui/recipe/recipe.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faClock,
  faStar,
  faSave,
  faShare,
  faPrint,
  faKitchenSet,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export const RecipeComponent = () => {
  return (
    <RecipeContainer>
      <RecipeBreadcrumb />

      <RecipeMain>
        <div className="recipe__image">
          <img src="https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/1ed664f83277e5deeddc746d59598ae7.webp?itok=P8KkhqSo" />
        </div>

        <RecipeInformation />

        <RecipeTexts />

        <RecipeActions />

        <RecipeTags />

        <RecipeUtensils />

        <RecipeIngredients />

        <RecipeSteps />
      </RecipeMain>

      <RecipeSidebar>
        <RecipeAside />
      </RecipeSidebar>

      <RecipeFooterComponent>
        <RecipeFooter />
      </RecipeFooterComponent>
    </RecipeContainer>
  );
};

const RecipeBreadcrumb = () => {
  return (
    <RecipeTop>
      <nav
        className="breadcrumb"
        role="navigation"
        aria-labelledby="system-breadcrumb"
      >
        <ol>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to="#">Categorías</Link>
          </li>
        </ol>
      </nav>
    </RecipeTop>
  );
};

const RecipeInformation = () => {
  return (
    <ul className="informations">
      <li>
        <p className="title-info">Total</p>
        <span className="difficulty__text">
          <FontAwesomeIcon
            icon={faClock}
            style={{
              fontSize: "0.875rem",
              color: "var(--color-9)",
              marginRight: "6px",
            }}
          />
          11
        </span>
      </li>
      <li>
        <p className="title-info">Dificultad</p>
        <span className="difficulty__text">Fácil</span>
      </li>
      <li>
        <p className="title-info">Total</p>
        <span className="difficulty__text">
          <FontAwesomeIcon
            icon={faStar}
            style={{
              fontSize: "0.875rem",
              color: "var(--color-9)",
              marginRight: "6px",
            }}
          />
          5
        </span>
      </li>
    </ul>
  );
};

const RecipeTexts = () => {
  return (
    <div className="recipe__texts">
      <h1 className="hl-1">Tacos de Chuleta con Piña</h1>

      <p className="chefName">
        Por <span>Abraham Gómez</span>
      </p>
      <div className="description">
        <p>
          Para tu comida prepara una receta rápida y deliciosa: TACOS de CHULETA
          con PIÑA sazonados con JUGO MAGGI® y CROSSE &amp; BLACKWELL®. Fáciles
          y económicos.
        </p>
      </div>
    </div>
  );
};

const RecipeActions = () => {
  return (
    <ul className="actions__recipes">
      <li>
        <button className="actions__button">
          <FontAwesomeIcon
            icon={faSave}
            style={{
              fontSize: "2.125rem",
              color: "var(--color-1)",
              marginBottom: "6px",
            }}
          />
          <p>Guardar</p>
        </button>
      </li>
      <li>
        <button className="actions__button">
          <FontAwesomeIcon
            icon={faShare}
            style={{
              fontSize: "2.125rem",
              color: "var(--color-1)",
              marginBottom: "6px",
            }}
          />
          <p>Compartir</p>
        </button>
      </li>
      <li>
        <button className="actions__button">
          <FontAwesomeIcon
            icon={faPrint}
            style={{
              fontSize: "2.125rem",
              color: "var(--color-1)",
              marginBottom: "6px",
            }}
          />
          <p>Imprimir</p>
        </button>
      </li>
      <li>
        <button className="actions__button">
          <FontAwesomeIcon
            icon={faKitchenSet}
            style={{
              fontSize: "2.125rem",
              color: "var(--color-1)",
              marginBottom: "6px",
            }}
          />
          <p>Marcar cocinada</p>
        </button>
      </li>
    </ul>
  );
};

const RecipeTags = () => {
  return (
    <section className="tags__filters">
      <h3 className="tags__filters__title">No incluido en la receta</h3>
      <ul className="tags__filters__list">
        <li className="item">
          <Link to="#" className="tags__filters__link">
            Sin nueces de árbol
          </Link>
        </li>
        <li className="item">
          <Link to="#" className="tags__filters__link">
            Sin frutos secos ni cacahuates
          </Link>
        </li>
        <li className="item sin-pescado">
          <Link to="#" className="tags__filters__link">
            Sin pescado
          </Link>
        </li>
        <li className="item sin-huevo">
          <Link to="#" className="tags__filters__link">
            Sin huevo
          </Link>
        </li>
        <li className="item sin-crustáceos">
          <Link to="#" className="tags__filters__link">
            Sin crustáceos
          </Link>
        </li>
      </ul>
    </section>
  );
};

const RecipeUtensils = () => {
  return (
    <div className="utensils">
      <h2 className="utensils__title">Utensilios</h2>
      <ul className="utensils__list">
        <li className="utensils__item">
          <div className="image">
            <img
              src="https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/4b9b029ad09ce9eb7acc668aa5c04ed8.svg"
              alt="srh_media_1658414971"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>
          <h3 className="name">Sartén</h3>
        </li>
        <li className="utensils__item">
          <div className="image">
            <img
              src="https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/9b2dfb4377b43a2872f0977bd8baddda.svg"
              alt="srh_media_1658415116"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>
          <h3 className="name">Espátula</h3>
        </li>
        <li className="utensils__item">
          <div className="image">
            <img
              src="https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/e561e18f21b9388872956e79548391ca.svg"
              alt="srh_media_1658419285"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>
          <h3 className="name">Tabla de cortar</h3>
        </li>
      </ul>
    </div>
  );
};

const RecipeIngredients = () => {
  return (
    <div className="ingredients">
      <h2 className="ingredients__title">Ingredientes</h2>

      <div className="servings">
        <FontAwesomeIcon
          icon={faPeopleGroup}
          style={{
            fontSize: "1.25rem",
            marginRight: "0.25rem",
            color: "var(--color-1)",
          }}
        />
        <p className="serving__portions">Porciones: 4</p>
      </div>

      <ul>
        <li>
          <div className="cook__item">
            <input type="checkbox" name="checkDone" id="ingredient-1" />
            <label htmlFor="ingredient-1" className="checkDone">
              <span>
                <span>3 Chuletas ahumadas</span>
                cortadas en cubos
              </span>
            </label>
          </div>
        </li>
        <li>
          <input type="checkbox" name="checkDone" id="ingredient-2" />
          <label htmlFor="ingredient-2" className="checkDone">
            <span>
              <span>2 Rebanadas de piña en almíbar</span>
              cortadas en cubos
            </span>
          </label>
        </li>
        <li>
          <input type="checkbox" name="checkDone" id="ingredient-3" />
          <label htmlFor="ingredient-3" className="checkDone">
            <span>
              <span>3 Cucharadas de Jugo MAGGI®</span>
            </span>
          </label>
        </li>
        <li>
          <input type="checkbox" name="checkDone" id="ingredient-4" />
          <label htmlFor="ingredient-4" className="checkDone">
            <span>
              <span>
                3 Cucharadas de Salsa Tipo Inglesa CROSSE &amp; BLACKWELL®
              </span>
            </span>
          </label>
        </li>
        <li>
          <input type="checkbox" name="checkDone" id="ingredient-5" />
          <label htmlFor="ingredient-5" className="checkDone">
            <span>
              <span>8 Tortillas de maíz</span>
              caliente
            </span>
          </label>
        </li>
      </ul>

      <a
        className="btn__zap"
        target="_BLANK"
        href="https://wa.me/?text=Lista%20de%20ingredientes%20de%20Tacos%20de%20Chuleta%20con%20Pi%C3%B1a%20%7C%20Recetas%20Nestl%C3%A9%3A%0A%0A-%203%20Chuletas%20ahumadas%20cortadas%20en%20cubos%0A-%202%20Rebanadas%20de%20pi%C3%B1a%20en%20alm%C3%ADbar%20cortadas%20en%20cubos%0A-%203%20Cucharadas%20de%20Jugo%20MAGGI%C2%AE%0A-%203%20Cucharadas%20de%20Salsa%20Tipo%20Inglesa%20CROSSE%20%26%20BLACKWELL%C2%AE%0A-%208%20Tortillas%20de%20ma%C3%ADz%20caliente%0A%0Ahttps%3A%2F%2Fwww.recetasnestle.com.mx%2Frecetas%2Ftacos-chuleta-pina"
      >
        Compartir lista de ingredientes
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{
            fontSize: "1.875rem",
            display: "inline-block",
            color: "white",
          }}
        />
      </a>

      <div className="adimo__container">
        <span className="btn__adimo" role="button">
          Comprar ingredientes
        </span>
      </div>
    </div>
  );
};

const RecipeSteps = () => {
  return (
    <div className="ingredients ingredient__steps">
      <h2 className="ingredients__title">¡A cocinar!</h2>

      <ul>
        <li>
          <div className="cook__item">
            <h2 className="cook__item__title">Cocina</h2>
            <input type="checkbox" name="checkDone" id="step-1" />
            <label htmlFor="step-1" className="checkDone">
              <span>
                <strong className="cook__list__index">1.</strong>En una sartén
                caliente agrega los cubos de chuleta y la piña.
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="cook__item">
            <h2 className="cook__item__title">Sazona</h2>
            <input type="checkbox" name="checkDone" id="step-2" />
            <label htmlFor="step-2" className="checkDone">
              <span>
                <strong className="cook__list__index">2.</strong>Vierte el Jugo
                MAGGI® con la Salsa Tipo Inglesa CROSSE & BLACKWELL® y cocina
                hasta que doren por completo todos los ingredientes.
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="cook__item">
            <h2 className="cook__item__title">Prepara los tacos</h2>
            <input type="checkbox" name="checkDone" id="step-3" />
            <label htmlFor="step-3" className="checkDone">
              <span>
                <strong className="cook__list__index">3.</strong>Retira del
                sartén, sirve en las tortillas. Ofrece y disfruta.
              </span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

const RecipeAside = () => {
  return (
    <>
      <div className="recipe__section__header">
        <h2>Recetas que te pueden interesar</h2>
      </div>

      <div className="recipe__section__content">
        <div className="recipe__section__list">
          {Array(4)
            .fill(null)
            .map((_, idx) => (
              <Link to="#" className="card__recipe" key={idx}>
                <div className="card__recipe__image">
                  <img
                    src="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/c638d17edfbb63a5310471a3b6b75b90.jpg.webp?itok=3Fdu7-dw"
                    alt="recipe_1"
                  />
                </div>

                <ul className="card__recipe__information">
                  <li className="info__difficulty">Fácil</li>
                  <li className="info__time">37 min</li>
                </ul>

                <h3 className="card__recipe__title">
                  Tacos de camarón al pastor
                </h3>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

const RecipeFooter = () => {
  return (
    <>
      <h2 className="recipe__comments__title">Comentarios (1)</h2>

      <div className="recipe__comments__login">
        <h2 className="recipe__comments__login__description">
          ¿A quién consentiste con esta rica receta? Cuéntanos cómo te quedó.
        </h2>

        <div className="recipe__comments__login__actions">
          <Link to="#" className="btn btn-primary">
            Iniciar sesión
          </Link>
          <Link to="#" className="btn btn-secondary">
            Registrame
          </Link>
        </div>

        <div className="recipe__comments__comment__container">
          <div className="recipe__comments__comment">
            <div className="text">
              <div className="name">Fabi</div>
              <div className="time">06.06.2023</div>

              <div className="stars">
                {Array(5)
                  .fill(null)
                  .map((_, idx) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        fontSize: "0.50rem",
                        color: "var(--color-9)",
                        marginRight: "2px",
                      }}
                      key={idx}
                    />
                  ))}
              </div>
            </div>
            <div className="content">
              <p>
                Queda muy rico!! Yo freí cebolla antes de freír la carne y la
                piña :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
