<!-- TITLE/ -->
# sass-stretched-link
<!-- /TITLE -->

<!-- BADGES/ -->
  <p>
    <a href="https://npmjs.org/package/sass-stretched-link">
      <img
        src="https://img.shields.io/npm/v/sass-stretched-link.svg"
        alt="npm version"
      >
    </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/sass-stretched-link/actions">
      <img
        src="https://github.com/dword-design/sass-stretched-link/workflows/build/badge.svg"
        alt="Build status"
      >
    </a><a href="https://codecov.io/gh/dword-design/sass-stretched-link">
      <img
        src="https://codecov.io/gh/dword-design/sass-stretched-link/branch/master/graph/badge.svg"
        alt="Coverage status"
      >
    </a><a href="https://david-dm.org/dword-design/sass-stretched-link">
      <img src="https://img.shields.io/david/dword-design/sass-stretched-link" alt="Dependency status">
    </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/sass-stretched-link">
      <img
        src="https://gitpod.io/button/open-in-gitpod.svg"
        alt="Open in Gitpod"
        width="114"
      >
    </a><a href="https://www.buymeacoffee.com/dword">
      <img
        src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
        alt="Buy Me a Coffee"
        width="114"
      >
    </a><a href="https://paypal.me/SebastianLandwehr">
      <img
        src="https://sebastianlandwehr.com/images/paypal.svg"
        alt="PayPal"
        width="163"
      >
    </a><a href="https://www.patreon.com/dworddesign">
      <img
        src="https://sebastianlandwehr.com/images/patreon.svg"
        alt="Patreon"
        width="163"
      >
    </a>
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
A SASS mixin that implements a stretched link. Useful for cards that should be clickable everywhere.
<!-- /DESCRIPTION -->

It sometimes happens that when you click a card with a link, you want the whole card to be clickable. The best way to do this is to have a link that is put inside the card but the clickable link area stretches over the card. Bootstrap implements a [.stretched-link](https://getbootstrap.com/docs/4.3/utilities/stretched-link/) class which does that. This SASS mixin implements the logic behind it and thus abstracts away complexity from the app or the CSS framework.

<!-- INSTALL/ -->
## Install

```bash
# npm
$ npm install sass-stretched-link

# Yarn
$ yarn add sass-stretched-link
```
<!-- /INSTALL -->

## Usage

Import the mixin like so:

```scss
@import '~sass-stretched-link';
```

Then create a class with the mixin:

```scss
.stretched-link {
  @include stretched-link;
}
```

Now you can use the class in your code:

```html
<div class="card">
  <a class="stretched-link" href="/">Link</a>
</div>
```

<!-- LICENSE/ -->
## Contribute

Are you missing something or want to contribute? Feel free to file an [issue](https://github.com/dword-design/sass-stretched-link/issues) or a [pull request](https://github.com/dword-design/sass-stretched-link/pulls)! ⚙️

## Support

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      width="114"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://sebastianlandwehr.com/images/paypal.svg"
      alt="PayPal"
      width="163"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://sebastianlandwehr.com/images/patreon.svg"
      alt="Patreon"
      width="163"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://sebastianlandwehr.com)
<!-- /LICENSE -->
