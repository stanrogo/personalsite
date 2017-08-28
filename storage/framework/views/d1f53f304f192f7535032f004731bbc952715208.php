<section id="hero" class="grid-container">
    <h1 class="hero-heading hero-title">
        I'm <strong><?php echo e($introduction->getName()); ?></strong>
    </h1>
    <h2 class="hero-heading hero-subtitle">
        <?php echo e($introduction->getProfession()); ?>, <?php echo e($introduction->getLocation()); ?>

    </h2>
    <a href="<?php echo e($cv->getFile()->getUrl()); ?>" target="_blank"
       class="button button--resume-download button--resume-download-mobile">
        Download My Resume!
    </a>
    <div class="intro-wrapper">
        <?php echo e(\Illuminate\Mail\Markdown::parse($introduction->getDescription())); ?>

    </div>
    <a href="<?php echo e($cv->getFile()->getUrl()); ?>" target="_blank"
       class="button button--resume-download button--resume-download-desktop">
        Download My Resume!
    </a>
</section>
