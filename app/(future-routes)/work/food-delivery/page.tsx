import { redirect } from "next/navigation";

/**
 * Scaffolded future route for the Food Delivery case study (v2 §1/§4a).
 * Currently redirects to the Selected Work section, where the project card
 * opens the CaseStudyComingSoonModal (locked launch-version behavior).
 * This route is promoted to a real case study page in a future version.
 */
export default function FoodDeliveryFutureRoute() {
  redirect("/#work");
}
