<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="Red Hat Enterprise Linux/Rocky Linux">
  <section class="mb-12">
    <p class="mb-4">Rocky Linux is probably my favorite distrobution. Here is some things I've found useful</p>
    <h2 class="text-xl font-bold mb-4">Open port in firewall</h2>
    <CodeBlock code={[`$ firewall-cmd --zone=public --add-port=80/tcp --permanent`, `$ firewall-cmd --reload`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-xl font-bold mb-4">Install NodeJS via NVM</h2>
    <CodeBlock code={[`$ sudo dnf install curl`, `$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`, `$ source ~/.bashrc`, `$ nvm install node        # Install latest stable version`, `$ nvm install lts/*       # Install latest lts version `, `$ nvm use node/lts/version`]} />
  </section>
</Article>
