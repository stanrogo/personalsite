<?php $__env->startSection('page-template'); ?>

    <div id="work">
        <div class="grid-container">
            <h1 class="section-heading">Work</h1>

            <?php $__currentLoopData = $work; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $job): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                <section class="work-card">

                    <div class="work--content">
                        <div class="work-dates">
                            <?php echo e(strftime(
                                    "%B %Y",
                                    $job->getStart()->getTimestamp()
                                )); ?>

                            -

                            <?php if($job->getEnd()): ?>
                                <?php echo e(strftime(
                                        "%B %Y",
                                        $job->getEnd()->getTimestamp()
                                    )); ?>

                            <?php else: ?>
                                present
                            <?php endif; ?>


                        </div>
                        <h1 class="work-company"><?php echo e($job->getCompany()); ?></h1>
                        <h2 class="work-position"><?php echo e($job->getRole()); ?></h2>
                        <?php echo e(\Illuminate\Mail\Markdown::parse($job->getDescription())); ?>


                        <?php if($job->getPhoto()): ?>

                        <figure class="work--figure">
                            <img class="work--image" src="<?php echo e($job->getPhoto()->getFile()->getUrl()); ?>">
                        </figure>

                        <?php endif; ?>
                    </div>
                </section>

            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>