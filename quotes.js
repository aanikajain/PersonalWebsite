/*
 * Daily quote picker.
 * The quote of the day is chosen deterministically from the day of the
 * year (no randomness, no network calls, no AI) — so it's stable all day
 * and rolls over to the next quote at local midnight.
 */
var QUOTES = [
  { text: "Placeholder quote number one about doing good work.", author: "Author One", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number two about staying curious.", author: "Author Two", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number three about patience and craft.", author: "Author Three", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number four about starting small.", author: "Author Four", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number five about learning from failure.", author: "Author Five", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number six about simplicity.", author: "Author Six", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number seven about persistence.", author: "Author Seven", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number eight about honest work.", author: "Author Eight", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number nine about paying attention.", author: "Author Nine", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number ten about small daily habits.", author: "Author Ten", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number eleven about asking good questions.", author: "Author Eleven", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twelve about generosity.", author: "Author Twelve", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number thirteen about resilience.", author: "Author Thirteen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number fourteen about clear thinking.", author: "Author Fourteen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number fifteen about showing up.", author: "Author Fifteen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number sixteen about listening well.", author: "Author Sixteen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number seventeen about taking risks.", author: "Author Seventeen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number eighteen about gratitude.", author: "Author Eighteen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number nineteen about honest feedback.", author: "Author Nineteen", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty about steady progress.", author: "Author Twenty", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-one about focus.", author: "Author Twenty-One", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-two about kindness.", author: "Author Twenty-Two", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-three about courage.", author: "Author Twenty-Three", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-four about discipline.", author: "Author Twenty-Four", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-five about wonder.", author: "Author Twenty-Five", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-six about rest.", author: "Author Twenty-Six", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-seven about ambition.", author: "Author Twenty-Seven", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-eight about humility.", author: "Author Twenty-Eight", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number twenty-nine about clarity.", author: "Author Twenty-Nine", context: "A sentence of extra context or source information about this quote." },
  { text: "Placeholder quote number thirty about beginnings.", author: "Author Thirty", context: "A sentence of extra context or source information about this quote." }
];

function dayOfYear(date) {
  var start = new Date(date.getFullYear(), 0, 0);
  var diff = date - start;
  return Math.floor(diff / 86400000);
}

function quoteOfTheDay() {
  var index = dayOfYear(new Date()) % QUOTES.length;
  return QUOTES[index];
}

document.addEventListener("DOMContentLoaded", function () {
  var block = document.getElementById("daily-quote");
  if (!block) return;

  var quote = quoteOfTheDay();
  var textEl = document.getElementById("quote-text");
  var authorEl = document.getElementById("quote-author");
  var hintEl = document.getElementById("quote-hint");
  var contextEl = document.getElementById("quote-context");

  textEl.textContent = quote.text;
  authorEl.textContent = quote.author;
  contextEl.textContent = quote.context;

  block.addEventListener("click", toggle);
  block.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  function toggle() {
    var expanded = contextEl.classList.toggle("hidden") === false;
    hintEl.textContent = expanded
      ? "Click the quote to collapse"
      : "Click the quote to learn more";
    block.setAttribute("aria-expanded", String(expanded));
  }
});
